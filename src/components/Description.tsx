import { t } from "@/i18n/translations";

interface Props {
  lang: "ko" | "en";
}

export default function Description({ lang }: Props) {
  return (
    <div className='text-center mb-6 font-content'>
      <p className='text-[#654321] text-md sm:text-xl mb-1'>
        {t(lang, "description.main")}
      </p>
      <p className='text-[#A67B5B] text-sm sm:text-base'>
        {t(lang, "description.sub")}
      </p>
    </div>
  );
}
