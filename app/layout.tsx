import "./globals.css";
import type { Metadata } from "next";
import { pretendard } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Hyper Soso",
  description: "HyperSoso, Making fun stuff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${pretendard.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
