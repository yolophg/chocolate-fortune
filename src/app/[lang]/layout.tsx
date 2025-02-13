import { Metadata } from "next";
import { chocolates } from "@/data/chocolates";
import { redirect } from "next/navigation";

interface Props {
  params: { lang: string };
  searchParams?: { id?: string; fortune?: string };
}

export function generateStaticParams() {
  return [{ lang: "ko" }, { lang: "en" }];
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  // wrong language parameter check
  if (!["ko", "en"].includes(params.lang)) {
    redirect("/ko"); // redirect to default language
  }

  const isEn = params.lang === "en";
  const searchParams = (await props.searchParams) || {};
  const { id, fortune } = searchParams;

  // default metadata
  const defaultMetadata = {
    title: isEn ? "Chocolate Fortune" : "초콜릿 운세",
    description: isEn
      ? "Discover your daily fortune through delicious chocolates!"
      : "맛있는 초콜릿으로 보는 오늘의 운세!",
    openGraph: {
      title: isEn ? "Chocolate Fortune" : "초콜릿 운세",
      description: isEn
        ? "Discover your daily fortune through delicious chocolates!"
        : "맛있는 초콜릿으로 보는 오늘의 운세!",
      images: ["/images/og-image.jpg"],
    },
  };

  // metadata when sharing results
  if (id && fortune) {
    const chocolate = chocolates.find((c) => c.id === id);
    if (!chocolate) return defaultMetadata;

    return {
      title: `${isEn ? chocolate.name.en : chocolate.name.ko} - ${
        isEn ? "Chocolate Fortune" : "초콜릿 운세"
      }`,
      description: fortune,
      openGraph: {
        title: isEn ? "Chocolate Fortune" : "초콜릿 운세",
        description: fortune,
        images: [
          {
            url: chocolate.image,
            width: 1200,
            height: 630,
            alt: isEn ? chocolate.name.en : chocolate.name.ko,
          },
        ],
        locale: isEn ? "en_US" : "ko_KR",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: isEn ? "Chocolate Fortune" : "초콜릿 운세",
        description: fortune,
        images: [chocolate.image],
      },
    };
  }

  return defaultMetadata;
}

export default async function RootLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const params = await paramsPromise;

  // wrong language parameter check
  if (!["ko", "en"].includes(params.lang)) {
    redirect("/ko"); // redirect to default language
  }

  return children; // return children without html tags
}
