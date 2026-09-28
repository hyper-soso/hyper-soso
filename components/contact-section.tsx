"use client";

import { sendContact } from "@/app/actions/contact";
import Image from "next/image";
import { useState, useTransition, type FormEvent } from "react";

const fieldClass = "mt-4 p-4 w-full rounded bg-background";

export function ContactSection() {
  const [status, setStatus] = useState("");
  const [pending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("");

    startTransition(async () => {
      try {
        const result = await sendContact(formData);
        setStatus(result.message);
        if (result.success) form.reset();
      } catch {
        setStatus("연결하지 못했습니다. 잠시 후 다시 시도해주세요.");
      }
    });
  }

  return (
    <section>
      <div className="p-4 md:p-8 grid gap-8 rounded-lg md:grid-cols-3 bg-secondary">
        <div className="md:col-span-2 min-w-0">
          <h2 className="text-2xl md:text-4xl font-semibold break-keep text-balance">
            Let&apos;s make
            <br />
            something extra.
          </h2>
          <p className="mt-4 max-w-lg text-sm md:text-base leading-relaxed break-keep text-balance text-muted-foreground">
            서비스에 대한 궁금한 점이나 함께 나누고 싶은 이야기를 남겨주세요.
          </p>
          <div className="mt-8 pl-4 border-l">
            <h3 className="text-sm font-medium">Email</h3>
            <a
              href="mailto:cs@hypersoso.com"
              className="text-sm text-muted-foreground"
            >
              cs@hypersoso.com
            </a>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-8 text-sm">
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
            <div className="grid gap-4 md:gap-8 md:grid-cols-2">
              <label>
                이름
                <input
                  name="name"
                  required
                  maxLength={80}
                  readOnly={pending}
                  autoComplete="name"
                  placeholder="이름을 알려주세요"
                  className={fieldClass}
                />
              </label>
              <label>
                이메일
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  readOnly={pending}
                  autoComplete="email"
                  placeholder="답변받을 이메일"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="block">
              메시지
              <textarea
                name="message"
                required
                maxLength={5000}
                readOnly={pending}
                rows={6}
                placeholder="문의사항을 적어주세요"
                className={fieldClass}
              />
            </label>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={pending}
                className="px-8 py-4 shrink-0 rounded-full border bg-primary text-primary-foreground cursor-pointer"
              >
                {pending ? "전송 중…" : "문의하기"}
              </button>
              <p aria-live="polite" className="text-xs text-muted-foreground">
                {status}
              </p>
            </div>
          </form>
        </div>
        <Image
          src="/about-everyday.png"
          alt="contact"
          height={940}
          width={940}
          className="h-full w-full aspect-video md:aspect-auto rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
