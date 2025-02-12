import { InitOptions } from "i18next";

export const defaultNS = "common";
export const fallbackLng = "kr";

export const i18nConfig: InitOptions = {
  defaultNS,
  fallbackLng,
  supportedLngs: ["kr", "en"],
  ns: ["common"],
  interpolation: {
    escapeValue: false,
  },
};
