import { Metadata } from "next";

interface Props {
  params: { lang: string };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  // check language value in advance
  const isEn = lang === "en";

  return {
    title: isEn ? "Chocolate Fortune" : "초콜릿 운세",
    description: isEn
      ? "Discover your daily fortune through delicious chocolates!"
      : "맛있는 초콜릿으로 보는 오늘의 운세!",
    openGraph: {
      title: isEn ? "Chocolate Fortune" : "초콜릿 운세",
      description: isEn
        ? "Discover your daily fortune through delicious chocolates!"
        : "맛있는 초콜릿으로 보는 오늘의 운세!",
      images: [
        {
          url: "/images/og-image.jpg", // path for OG image
          width: 1200,
          height: 630,
          alt: isEn ? "Chocolate Fortune" : "초콜릿 운세",
        },
      ],
      locale: isEn ? "en_US" : "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isEn ? "Chocolate Fortune" : "초콜릿 운세",
      description: isEn
        ? "Discover your daily fortune through delicious chocolates!"
        : "맛있는 초콜릿으로 보는 오늘의 운세!",
      images: ["/images/og-image.jpg"], // twitter card image
    },
  };
}

export default function Layout({ children }: Props) {
  return children;
}
