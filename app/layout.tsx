import "./globals.css";
import type { Metadata } from "next";
import { pretendard } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Hyper Soso",
  description: "소소한 일상을 조금 더 특별하게, Hyper Soso",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
