"use client";

import { useState } from "react";
import { t } from "@/i18n/translations";
import { chocolates } from "@/data/chocolates";
import ChocolateGacha from "@/components/ChocolateGacha";
import FortuneResult from "@/components/FortuneResult";
import type { FortuneResult as FortuneResultType } from "@/types/chocolate";
import Footer from "./Footer";
import LanguageSelector from "./LanguageSelector";
import Description from "./Description";

interface Props {
  lang: "ko" | "en";
  searchParams: {
    id?: string;
    fortune?: string;
  };
}

export default function ClientPage({ lang, searchParams }: Props) {
  const [result, setResult] = useState<FortuneResultType | null>(() => {
    if (searchParams?.id && searchParams?.fortune) {
      const chocolate = chocolates.find((c) => c.id === searchParams.id);
      if (
        chocolate &&
        (chocolate.type === "milk" ||
          chocolate.type === "dark" ||
          chocolate.type === "white")
      ) {
        return {
          chocolate,
          fortune: decodeURIComponent(searchParams.fortune),
        };
      }
    }
    return null;
  });
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div className='flex flex-col min-h-screen bg-[#FFF5E6]'>
      <LanguageSelector lang={lang} />

      <main className='flex-1 p-4 overflow-x-hidden flex items-center justify-center'>
        <div className='w-full max-w-md'>
          <div className='bg-[#E6D5C4] rounded-2xl shadow-xl p-6 border-4 border-[#A67B5B]'>
            <h1
              className={`text-2xl sm:text-3xl font-bold text-[#654321] text-center mb-2 sm:mb-4 drop-shadow-lg
              ${lang === "en" ? "font-title-en" : "font-title-ko"}`}
            >
              {t(lang, "title")}
            </h1>

            <Description lang={lang} />

            <div className='bg-[#654321] rounded-xl p-4 shadow-inner'>
              {!result ? (
                <ChocolateGacha
                  isSpinning={isSpinning}
                  setIsSpinning={setIsSpinning}
                  setResult={setResult}
                  lang={lang}
                />
              ) : (
                <FortuneResult
                  result={result}
                  onReset={() => setResult(null)}
                  lang={lang}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
