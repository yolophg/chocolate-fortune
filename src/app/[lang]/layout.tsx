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

  return {
    title: isEn ? "Chocolate Fortune" : "초콜릿 운세 뽑기",
    description: isEn
      ? "Pick a chocolate and discover your fortune!"
      : "맛있는 초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
  };
}
