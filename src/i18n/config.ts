import { InitOptions } from "i18next";

export const defaultNS = "common";
export const fallbackLng = "ko";

export const i18nConfig: InitOptions = {
  defaultNS,
  fallbackLng,
  supportedLngs: ["ko", "en"],
  ns: ["common"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};
