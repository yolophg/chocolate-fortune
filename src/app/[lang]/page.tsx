import { Suspense } from "react";
import ClientPage from "@/components/ClientPage";

export function generateStaticParams() {
  return [{ lang: "kr" }, { lang: "en" }];
}

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage lang={lang} />
    </Suspense>
  );
}
