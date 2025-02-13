export const translations = {
  ko: {
    title: "초콜릿 운세 뽑기🕹",
    description: {
      main: "초콜릿을 뽑아 오늘의 운세를 확인해보세요!",
      sub: "AI가 당신만을 위한 특별한 운세를 생성해드립니다"
    },
    button: {
      start: "운세 뽑기",
      loading: "초콜릿 선택 중...",
      retry: "다시하기",
      share: "공유하기",
      copyLink: "링크 복사",
      close: "닫기",
      click: "클릭!"
    },
    share: {
      title: "공유하기",
      text: "나의 초콜릿: {{chocolateName}}\n운세: {{fortune}}"
    },
    language: {
      ko: "한국어",
      en: "영어"
    },
    alert: {
      copySuccess: "링크가 복사되었습니다",
      copyError: "링크 복사에 실패했습니다"
    }
  },
  en: {
    title: "Chocolate Fortune🕹",
    description: {
      main: "Draw a chocolate and discover your fortune!",
      sub: "AI will generate a special fortune just for you"
    },
    button: {
      start: "Draw Fortune",
      loading: "Selecting chocolate...",
      retry: "Try Again",
      share: "Share",
      copyLink: "Copy Link",
      close: "Close",
      click: "Click!"
    },
    share: {
      title: "Share via",
      text: "My chocolate: {{chocolateName}}\nFortune: {{fortune}}"
    },
    language: {
      ko: "Korean",
      en: "English"
    },
    alert: {
      copySuccess: "Link copied to clipboard",
      copyError: "Failed to copy link"
    }
  }
} as const;

export type Lang = keyof typeof translations;
type TranslationsType = typeof translations;

type PathsToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
    }[Extract<keyof T, string>];

type Join<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${Join<Extract<R, string[]>, D>}`
    : never
  : string;

type TranslationKeys = Join<PathsToStringProps<TranslationsType[Lang]>, ".">;

export function t(lang: Lang, key: TranslationKeys, params?: Record<string, string>): string {
  const keys = key.split('.') as Array<string>;
  const value = keys.reduce((obj, k) => obj[k as keyof typeof obj], translations[lang]);

  if (params && typeof value === 'string') {
    return Object.entries(params).reduce((acc, [key, val]) => {
      return acc.replace(`{{${key}}}`, val);
    }, value);
  }

  return value as string;
}
