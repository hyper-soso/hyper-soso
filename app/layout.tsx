import "./globals.css";
import type { Metadata } from "next";
import { pretendard } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://hypersoso.com"),
  title: "HyperSoso",
  description: "소소한 일상을 특별하게",
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "HyperSoso",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pretendard.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
