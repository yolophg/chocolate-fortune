"use client";

import { motion } from "framer-motion";
import type { FortuneResult } from "@/types/chocolate";
import Image from "next/image";
import { t } from "@/i18n/translations";

interface Props {
  result: FortuneResult;
  onReset: () => void;
  lang: "ko" | "en";
}

export default function FortuneResult({ result, onReset, lang }: Props) {
  const handleShare = () => {
    void (async () => {
      const shareUrl = `${window.location.origin}/${lang}/result/${result.chocolate.id}`;

      try {
        await navigator.share({
          title: t(lang, "fortune.shareTitle"),
          text: t(lang, "share.text", {
            chocolateName: result.chocolate.name[lang],
            fortune: result.fortune,
          }),
          url: shareUrl,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    })();
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
      <h2 className='text-xl sm:text-2xl font-content font-bold text-[#4E342E] mb-3 sm:mb-4'>
        {lang === "en" ? result.chocolate.name.en : result.chocolate.name.ko}
      </h2>
      <p className='text-base sm:text-lg font-content mb-4 sm:mb-6 text-[#A67B5B]'>
        {result.fortune}
      </p>
      <div className='flex gap-3 sm:gap-4 justify-center'>
        <button
          onClick={onReset}
          className='bg-[#E6D5C4] text-[#654321] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-content'
        >
          {t(lang, "button.retry")}
        </button>
        <button
          onClick={handleShare}
          className='bg-[#FFD700] text-[#654321] px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-content'
        >
          {t(lang, "button.share")}
        </button>
      </div>
    </motion.div>
  );
}
