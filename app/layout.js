import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Мой Сайт — Next.js проект",
  description: "Это мой сайт, сделанный на Next.js и размещённый через Vercel.",
  keywords: ["Next.js", "Vercel", "React", "портфолио", "сайт"],
  authors: [{ name: "DaniilR12" }],
  robots: "index, follow",
  openGraph: {
    title: "Мой Сайт — Next.js проект",
    description: "Сделан с помощью Next.js и размещён через Vercel.",
    url: "https://learn-next-js-delta-two.vercel.app/", 
    siteName: "Мой Next.js сайт",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://learn-next-js-delta-two.vercel.app/" />
      </head>
      <body className={`${geistSans.variable}`}>
        <Header />
        <div className="contain">{children}</div>
      </body>
    </html>
  );
}
