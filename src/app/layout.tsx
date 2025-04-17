import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME } from "@/libs/constants/seo.constants";
import { APP_URL } from "@/libs/constants/url.constants";
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s - ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  applicationName: SITE_NAME,
  authors: [
    {
      name: 'Soulcat',
      url: new URL('https://github.com/s0ulcats')
    }
  ],
  keywords: SITE_KEYWORDS,
  generator: 'Next.js',
  creator: 'Danylo',
  publisher: 'SoulCat',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/touch-icons/256x256.png',
    other: {
      rel: 'touch-icons',
      url: '/touch-icons/256x256.png',
      sizes: '256x256',
      type: 'image/png'
    }
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: 'website',
    emails: ['babich.danya30@gmail.com'],
    locale: 'uk-UA',
    images: [
      {
        url: '/touch-icons/512x512.png',
        width: 512,
        height: 512,
        alt: SITE_NAME
      }
    ],
    url: new URL(APP_URL)
  },
  twitter: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/touch-icons/512x512.png',
        width: 512,
        height: 512,
        alt: SITE_NAME
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={'uk'}>
      <body
        className={GeistSans.variable}
      >
              {children}
      </body>
    </html>
  );
}
