"use server";

import { Resend } from "resend";

export async function sendContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    formData.get("website") ||
    typeof name !== "string" ||
    !name.trim() ||
    name.length > 80 ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 5000
  ) {
    return { success: false, message: "이름, 이메일, 메시지를 확인해주세요." };
  }

  const failure = {
    success: false,
    message:
      "전송하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 문의해주세요.",
  };

  if (!process.env.RESEND_API_KEY) return failure;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from =
      process.env.RESEND_FROM_EMAIL || "hyper soso <cs@hypersoso.com>";
    const { data, error } = await resend.emails.send({
      from,
      to: "cs@hypersoso.com",
      replyTo: email.trim(),
      subject: "[hyper soso] 홈페이지 문의",
      text: `이름: ${name.trim()}\n이메일: ${email.trim()}\n\n${message.trim()}`,
    });

    if (error || !data) {
      console.error("Contact email failed:", error?.name ?? "missing_response");
      return failure;
    }

    // 접수 확인 메일이 실패해도 이미 전달된 문의는 성공으로 처리합니다.
    try {
      const receipt = await resend.emails.send({
        from,
        to: email.trim(),
        replyTo: "cs@hypersoso.com",
        template: {
          id: "hypersoso-inquiry",
          variables: { customer_name: name.trim() },
        },
      });

      if (receipt.error || !receipt.data) {
        console.error(
          "Contact receipt failed:",
          receipt.error?.name ?? "missing_response",
        );
      }
    } catch {
      console.error("Contact receipt failed: connection_error");
    }

    return { success: true, message: "문의가 접수되었습니다. 감사합니다." };
  } catch {
    console.error("Contact email failed: connection_error");
    return failure;
  }
}
