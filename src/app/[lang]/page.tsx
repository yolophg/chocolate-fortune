import ClientPage from "@/components/ClientPage";

type LangType = "ko" | "en";

interface PageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function isValidLang(lang: string): lang is LangType {
  return ["ko", "en"].includes(lang);
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  if (!isValidLang(resolvedParams.lang)) {
    throw new Error("Invalid language");
  }

  return (
    <ClientPage
      lang={resolvedParams.lang}
      searchParams={resolvedSearchParams}
    />
  );
}
