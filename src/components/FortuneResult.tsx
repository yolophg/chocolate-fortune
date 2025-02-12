"use client";

import { motion } from "framer-motion";
import type { FortuneResult } from "@/types/chocolate";
import Image from "next/image";

interface Props {
  result: FortuneResult;
  onReset: () => void;
  lang: string;
}

export default function FortuneResult({ result, onReset, lang }: Props) {
  const handleShare = async () => {
    const shareData = {
      title: lang === "en" ? "Chocolate Fortune" : "초콜릿 운세",
      text:
        lang === "en"
          ? `My chocolate: ${result.chocolate.name.en}\nFortune: ${result.fortune}`
          : `나의 초콜릿: ${result.chocolate.name.ko}\n운세: ${result.fortune}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // share on mobile
        await navigator.share(shareData);
      } else {
        // copy to clipboard fallback
        const shareText = `${shareData.title}\n${shareData.text}\n${shareData.url}`;
        await navigator.clipboard.writeText(shareText);
        alert(
          lang === "en" ? "Copied to clipboard!" : "클립보드에 복사되었습니다!"
        );
      }
    } catch (error) {
      console.error("Share failed:", error);
      alert(lang === "en" ? "Failed to share" : "공유하기 실패");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[320px] sm:max-w-none mx-auto'
    >
      <Image
        src={result.chocolate.image}
        alt={
          lang === "en" ? result.chocolate.name.en : result.chocolate.name.ko
        }
        width={192}
        height={192}
        className='w-[140px] h-[140px] sm:w-[192px] sm:h-[192px] mx-auto mb-3 sm:mb-4 rounded-lg'
      />
      <h2 className='text-xl sm:text-2xl font-bold text-[#4E342E] mb-3 sm:mb-4'>
        {lang === "en" ? result.chocolate.name.en : result.chocolate.name.ko}
      </h2>
      <p className='text-base sm:text-lg mb-4 sm:mb-6 text-[#8D6E63]'>
        {result.fortune}
      </p>
      <div className='flex gap-3 sm:gap-4 justify-center'>
        <button
          onClick={onReset}
          className='bg-[#D7CCC8] text-[#4E342E] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base'
        >
          {lang === "en" ? "Try Again" : "다시하기"}
        </button>
        <button
          onClick={handleShare}
          className='bg-[#FFD700] text-[#4E342E] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base'
        >
          {lang === "en" ? "Share" : "공유하기"}
        </button>
      </div>
    </motion.div>
  );
}
