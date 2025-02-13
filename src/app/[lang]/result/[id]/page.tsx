import { chocolates } from "@/data/chocolates";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { t } from "@/i18n/translations";

interface ResultPageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: ResultPageProps) {
  const { lang, id } = await params;
  const chocolate = chocolates.find((c) => c.id === id);

  if (!chocolate) {
    return {};
  }

  const title = lang === "en" ? chocolate.name.en : chocolate.name.ko;
  const description = t(lang as "ko" | "en", "result.shared");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: chocolate.image,
          width: 800,
          height: 800,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [chocolate.image],
    },
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const resolvedParams = await params;
  const { lang, id } = resolvedParams;

  // check if the id is valid
  const chocolate = chocolates.find((c) => c.id === id);
  if (!chocolate || !["ko", "en"].includes(lang)) {
    redirect("/ko");
  }

  return (
    <div className='min-h-screen bg-[#FFF5E1] flex flex-col items-center justify-center p-4'>
      <div className='bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[320px] sm:max-w-none mx-auto'>
        <Image
          src={chocolate.image}
          alt={lang === "en" ? chocolate.name.en : chocolate.name.ko}
          width={192}
          height={192}
          className='w-[140px] h-[140px] sm:w-[192px] sm:h-[192px] mx-auto mb-3 sm:mb-4 rounded-lg'
        />
        <h2 className='text-xl sm:text-2xl font-content font-bold text-[#4E342E] mb-3 sm:mb-4 text-center'>
          {lang === "en" ? chocolate.name.en : chocolate.name.ko}
        </h2>
        <p className='text-base sm:text-lg font-content mb-4 sm:mb-6 text-[#A67B5B] text-center'>
          {t(lang as "ko" | "en", "result.shared")}
        </p>
        <div className='flex justify-center'>
          <Link
            href={`/${lang}`}
            className='bg-[#FFD700] text-[#654321] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-content'
          >
            {t(lang as "ko" | "en", "button.tryMyFortune")}
          </Link>
        </div>
      </div>
    </div>
  );
}
