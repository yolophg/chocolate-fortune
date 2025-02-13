import { Metadata } from "next";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: "ko" }, { lang: "en" }];
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;

  if (!["ko", "en"].includes(resolvedParams.lang)) {
    redirect("/ko");
  }
  return children;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  const baseUrl = "https://chocopick.space";

  return {
    title: isEn ? "Chocolate Fortune🍫" : "초콜릿 운세 뽑기🍫",
    description: isEn
      ? "Pick a chocolate and discover your fortune!"
      : "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: isEn ? "Chocolate Fortune🍫" : "초콜릿 운세 뽑기🍫",
      description: isEn
        ? "Pick a chocolate and discover your fortune!"
        : "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
      type: "website",
      url: `${baseUrl}/${resolvedParams.lang}`,
      images: [
        {
          url: `${baseUrl}/public/og-image.png`,
          width: 1200,
          height: 630,
          alt: isEn ? "Chocolate Fortune" : "초콜릿 운세 뽑기",
        },
      ],
      locale: isEn ? "en_US" : "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title: isEn ? "Chocolate Fortune🍫" : "초콜릿 운세 뽑기🍫",
      description: isEn
        ? "Pick a chocolate and discover your fortune!"
        : "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
      images: [`${baseUrl}/public/og-image.png`],
    },
  };
}
