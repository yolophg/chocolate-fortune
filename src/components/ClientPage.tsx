"use client";

import { useState } from "react";
import ChocolateGacha from "@/components/ChocolateGacha";
import FortuneResult from "@/components/FortuneResult";
import type { FortuneResult as FortuneResultType } from "@/types/chocolate";
import Footer from "./Footer";
import LanguageSelector from "./LanguageSelector";

interface Props {
  lang: string;
}

export default function ClientPage({ lang }: Props) {
  const [result, setResult] = useState<FortuneResultType | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <main className='relative min-h-screen bg-[#F5E1DA] p-4'>
      <LanguageSelector />
      <div className='pb-16 flex items-center justify-center min-h-[calc(100vh-80px)]'>
        <div className='max-w-md w-full mx-auto bg-[#D7CCC8] rounded-2xl shadow-xl p-6 border-4 border-[#8D6E63]'>
          <h1 className='text-3xl sm:text-4xl font-bold text-[#4E342E] text-center mb-6 sm:mb-8 drop-shadow-lg'>
            {lang === "en" ? "Chocolate Fortune Gacha" : "초콜릿 운세 뽑기"}
          </h1>

          <div className='bg-[#4E342E] rounded-xl p-4 shadow-inner'>
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
      <Footer />
    </main>
  );
}
