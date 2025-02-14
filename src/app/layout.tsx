import type { Metadata } from "next";
import Script from 'next/script'

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chocopick.space"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>

      {/* Google Analytics */}
      <Script id="google-analytics-script" async src="https://www.googletagmanager.com/gtag/js?id=G-74YY9TRJLR"></Script>
      <Script id="google-analytics-init" dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-74YY9TRJLR');
        `
      }}/>
    </html>
  );
}
