import { Suspense } from "react";
import ClientPage from "@/components/ClientPage";

interface PageProps {
  params: { lang: string };
  searchParams: { id?: string; fortune?: string };
}

export function generateStaticParams() {
  return [{ lang: "ko" }, { lang: "en" }];
}

export default async function Page({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: PageProps) {
  const params = await paramsPromise;
  const searchParams = await searchParamsPromise;

  return <ClientPage lang={params.lang} searchParams={searchParams} />;
}
