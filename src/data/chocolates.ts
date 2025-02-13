type ChocolateType = "milk" | "dark" | "white";

interface Chocolate {
  id: string;
  type: ChocolateType;
  name: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  image: string;
}

export const chocolates: Chocolate[] = [
  {
    id: "goldenHazelnut", // from Ferrero Rocher
    type: "milk",
    name: {
      ko: "골든 헤이즐넛",
      en: "Golden Hazelnut",
    },
    description: {
      ko: "바삭한 웨이퍼와 헤이즐넛이 들어간 고급 밀크 초콜릿",
      en: "Premium milk chocolate with crispy wafer and hazelnut",
    },
    image: "/images/chocolates/goldenHazelnut.png",
  },
  {
    id: "happyMilk", // from kinder chocolate
    type: "milk",
    name: {
      ko: "해피 밀크",
      en: "Happy Milk",
    },
    description: {
      ko: "부드럽고 달콤한 밀크 초콜릿과 크림의 조화",
      en: "Sweet milk chocolate with smooth cream filling",
    },
    image: "/images/chocolates/happyMilk.png",
  },
  {
    id: "swissDark", // from Lindt Excellence
    type: "dark",
    name: {
      ko: "스위스 다크",
      en: "Swiss Dark",
    },
    description: {
      ko: "깊은 카카오 풍미가 느껴지는 프리미엄 다크 초콜릿",
      en: "Premium dark chocolate with rich cocoa flavor",
    },
    image: "/images/chocolates/swissDark.png",
  },
  {
    id: "alpenMilk", // from Milka
    type: "milk",
    name: {
      ko: "알펜 밀크",
      en: "Alpen Milk",
    },
    description: {
      ko: "알프스 우유로 만든 부드러운 밀크 초콜릿",
      en: "Smooth milk chocolate made with Alpine milk",
    },
    image: "/images/chocolates/alpenMilk.png",
  },
  {
    id: "nuttyBar", // from Snickers
    type: "milk",
    name: {
      ko: "너티 카라멜바",
      en: "Nutty Caramel Bar",
    },
    description: {
      ko: "땅콩과 카라멜이 가득한 달콤한 초콜릿 바",
      en: "Sweet chocolate bar filled with peanuts and caramel",
    },
    image: "/images/chocolates/nuttyBar.png",
  },
  {
    id: "crispyCookie", // from Twix
    type: "milk",
    name: {
      ko: "크리스피 쿠키바",
      en: "Crispy Cookie Bar",
    },
    description: {
      ko: "바삭한 쿠키와 카라멜이 조화로운 초콜릿",
      en: "Chocolate with crunchy cookie and smooth caramel",
    },
    image: "/images/chocolates/crispyCookie.png",
  },
  {
    id: "mintChocolate", // from After Eights
    type: "dark",
    name: {
      ko: "민트 초콜릿",
      en: "Mint Chocolate",
    },
    description: {
      ko: "상쾌한 민트와 달콤한 다크 초콜릿의 조화",
      en: "Refreshing mint with sweet dark chocolate",
    },
    image: "/images/chocolates/mintChocolate.png",
  },
  {
    id: "pistachioDelight", // from Pistachio Delight
    type: "white",
    name: {
      ko: "피스타치오 딜라이트",
      en: "Pistachio Delight",
    },
    description: {
      ko: "고소한 피스타치오가 들어간 화이트 초콜릿",
      en: "White chocolate with premium pistachios",
    },
    image: "/images/chocolates/pistachioDelight.png",
  },
  {
    id: "caramelWafer", // from Toblerone
    type: "milk",
    name: {
      ko: "캐러멜 웨이퍼",
      en: "Caramel Wafer",
    },
    description: {
      ko: "캐러멜과 웨이퍼가 층층이 들어간 밀크 초콜릿",
      en: "Layered milk chocolate with caramel and wafer",
    },
    image: "/images/chocolates/caramelWafer.png",
  },
  {
    id: "crispyBalls", // from Moltsies
    type: "milk",
    name: {
      ko: "크리스피 초코볼",
      en: "Crispy Choco Balls",
    },
    description: {
      ko: "바삭바삭한 몰트볼이 들어간 밀크 초콜릿",
      en: "Milk chocolate with crunchy malt balls",
    },
    image: "/images/chocolates/crispyBalls.png",
  },
];
