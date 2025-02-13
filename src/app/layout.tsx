import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "초콜릿 운세 뽑기",
  description: "초콜릿으로 보는 오늘의 운세",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
