"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1];

  const handleLanguageChange = (lang: string) => {
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${lang}${path ? `/${path}` : ""}`);
  };

  return (
    <div className='absolute top-4 right-4'>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={currentLang}
        className='bg-[#8D6E63] text-white px-3 py-1 rounded-md'
      >
        <option value='kr'>한국어</option>
        <option value='en'>English</option>
      </select>
    </div>
  );
}
