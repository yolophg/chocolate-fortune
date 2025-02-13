import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chocopick.space"),
  title: "초콜릿 운세 뽑기🍫",
  description: "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
  openGraph: {
    title: "초콜릿 운세 뽑기🍫",
    description: "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
    type: "website",
    url: "https://chocopick.space",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "초콜릿 운세 뽑기",
      },
    ],
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "초콜릿 운세 뽑기🍫",
    description: "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
    images: ["/images/og-image.png"],
  },
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
