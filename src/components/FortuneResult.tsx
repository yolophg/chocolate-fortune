"use client";

import { motion } from "framer-motion";
import type { FortuneResult } from "@/types/chocolate";
import Image from "next/image";
import { useState } from "react";
import { t } from "@/i18n/translations";

interface Props {
  result: FortuneResult;
  onReset: () => void;
  lang: "ko" | "en";
}

export default function FortuneResult({ result, onReset, lang }: Props) {
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/${lang}?id=${
      result.chocolate.id
    }&fortune=${encodeURIComponent(result.fortune)}`;

    if (navigator.share) {
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
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = `${window.location.origin}/${lang}?id=${
      result.chocolate.id
    }&fortune=${encodeURIComponent(result.fortune)}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      alert(t(lang, "alert.copySuccess"));
    } catch (error) {
      console.error("Failed to copy:", error);
      alert(t(lang, "alert.copyError"));
    }
  };

  const ShareButtons = () => {
    const encodedText = encodeURIComponent(
      lang === "en"
        ? `My chocolate: ${result.chocolate.name.en}\nFortune: ${result.fortune}`
        : `나의 초콜릿: ${result.chocolate.name.ko}\n운세: ${result.fortune}`
    );
    const encodedUrl = encodeURIComponent(
      `${window.location.origin}/${lang}?id=${
        result.chocolate.id
      }&fortune=${encodeURIComponent(result.fortune)}`
    );

    if (lang === "ko") {
      return (
        <div className='grid grid-cols-2 gap-3'>
          <a
            href={`https://accounts.kakao.com/login/?continue=https://story.kakao.com/share?url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-[#FEE500] hover:bg-[#FDD800] text-[#000000] rounded-lg font-semibold transition-colors'
          >
            카카오톡
          </a>
          <a
            href={`https://www.instagram.com/share?url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-lg font-semibold transition-opacity'
          >
            인스타그램
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg font-semibold transition-colors'
          >
            링크드인
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors'
          >
            X
          </a>
        </div>
      );
    } else {
      // lang === "en"
      return (
        <div className='grid grid-cols-2 gap-3'>
          <a
            href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg font-semibold transition-colors'
          >
            WhatsApp
          </a>
          <a
            href={`https://www.instagram.com/share?url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-lg font-semibold transition-opacity'
          >
            Instagram
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg font-semibold transition-colors'
          >
            LinkedIn
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 py-3 px-4 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors'
          >
            X
          </a>
        </div>
      );
    }
  };

  return (
    <>
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

      {showShareModal && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-xl p-6 w-full max-w-[320px]'>
            <h3 className='text-xl font-bold mb-4 text-center text-gray-800'>
              {t(lang, "share.title")}
            </h3>
            <ShareButtons />
            <button
              onClick={handleCopyLink}
              className='mt-4 w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold transition-colors'
            >
              {t(lang, "button.copyLink")}
            </button>
            <button
              onClick={() => setShowShareModal(false)}
              className='mt-3 w-full py-3 px-4 text-gray-500 hover:text-gray-700 rounded-lg font-semibold transition-colors'
            >
              {t(lang, "button.close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
