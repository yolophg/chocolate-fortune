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
- **Font**: Google Fonts (Do Hyeon, Poor Story)
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/               # Next.js app router
│   ├── [lang]/       # Dynamic language routes
│   │   └── result/   # Result pages
│   ├── api/          # API routes
│   └── layout.tsx    # Root layout
│   └── page.tsx      # Root page
├── components/        # React components
│   ├── ChocolateGacha.tsx    # Main gacha machine
│   ├── ClientPage.tsx        # Client-side page
│   ├── FortuneResult.tsx     # Fortune display
│   ├── Description.tsx       # Page description
│   ├── Footer.tsx            # Footer component
│   └── LanguageSelector.tsx  # Language switcher
├── i18n/             # Internationalization
├── types/            # TypeScript definitions
├── utils/            # Utility functions
└── data/            # Static data (chocolates)
```

## 🛠 Getting Started

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
- Smooth spinning animation with Framer Motion
- Interactive lever mechanism
- Dynamic chocolate selection
- Realistic slot machine effects
- Progressive spinning speed changes

### Internationalization
- Seamless language switching (한국어/English)
- Full support for Korean and English
- SEO-optimized metadata for each language
- Type-safe translations

### AI Integration
- Dynamic fortune generation using Google Generative AI(Gemini)
- Contextual responses based on chocolate type
- Multi-language fortune generation
- Personalized fortune messages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a PR.

