# Chocolate Fortune Gacha 🍫

A fun and interactive web application that generates fortunes through a chocolate-themed gacha system. Built with Next.js and TypeScript.

## ✨ Features

- 🎰 Interactive gacha machine with smooth animations
- 🌏 Multi-language support (Korean/English)
- 🎯 Dynamic fortune generation using AI
- 🎨 Beautiful UI with chocolate theme
- 🔄 Smooth transitions and effects
- 🌐 SEO optimized with metadata

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **AI Integration**: Google Generative AI(Gemini)
- **Internationalization**: i18next

## 📁 Project Structure

```
src/
├── app/               # Next.js app router
│   ├── [lang]/       # Dynamic language routes
│   └── layout.tsx    # Root layout
│   └── page.tsx      # Root page
├── components/        # React components
│   ├── ChocolateGacha.tsx    # Main gacha machine
│   ├── ClientPage.tsx        # Client-side page
│   ├── FortuneResult.tsx     # Fortune display
│   └── LanguageSelector.tsx  # Language switcher
├── i18n/             # Internationalization
├── types/            # TypeScript definitions
├── utils/            # Utility functions
└── data/             # Static data
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/chocolate-fortune-gacha.git
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env.local` file:
```env
GOOGLE_API_KEY=your_google_api_key
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

## 🌟 Key Features Explained

### Gacha Machine
- Smooth spinning animation
- Interactive lever mechanism
- Dynamic chocolate selection
- Realistic slot machine effects

### Internationalization
- Seamless language switching
- Full support for Korean and English
- SEO-optimized metadata for each language

### AI Integration
- Dynamic fortune generation using Google Generative AI(Gemini)
- Contextual responses based on chocolate type
- Natural language processing

## 🔧 Configuration

### Language Settings
Edit `src/i18n/config.ts` to modify language settings:
```typescript
export const i18nConfig = {
  defaultNS: "common",
  fallbackLng: "ko",
  supportedLngs: ["ko", "en"]
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
