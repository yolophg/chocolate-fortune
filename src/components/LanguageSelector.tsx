"use client";

import { t } from "@/i18n/translations";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  lang: "ko" | "en";
}

export default function LanguageSelector({ lang }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLang: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLang}${path ? `/${path}` : ""}`);
  };

  return (
    <div className='relative w-full pt-4 px-4 flex justify-end z-50'>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={lang}
        className='bg-[#A67B5B] text-white px-3 py-1 rounded-md font-content'
      >
        <option value='ko'>{t(lang, "language.ko")}</option>
        <option value='en'>{t(lang, "language.en")}</option>
      </select>
    </div>
  );
}
