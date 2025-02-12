export interface Chocolate {
  id: string;
  type: "dark" | "milk" | "white";
  name: {
    ko: string;
    en: string;
  };
  image: string;
  description: {
    ko: string;
    en: string;
  };
}

export interface FortuneResult {
  chocolate: Chocolate;
  fortune: string;
}
