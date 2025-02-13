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

  const title = isEn ? "Chocolate Fortune🍫" : "초콜릿 운세 뽑기🍫";
  const description = isEn
    ? "Draw a chocolate and discover your fortune!"
    : "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${resolvedParams.lang}`,
      languages: {
        "en-US": `${baseUrl}/en`,
        "ko-KR": `${baseUrl}/ko`,
      },
    },
    other: {
      "og:locale:alternate": isEn ? ["ko_KR"] : ["en_US"],
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseUrl}/${resolvedParams.lang}`,
      siteName: title,
      locale: isEn ? "en_US" : "ko_KR",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: isEn ? "Chocolate Fortune" : "초콜릿 운세 뽑기",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
    },
  };
}
