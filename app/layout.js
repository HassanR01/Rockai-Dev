import Script from "next/script";
import Footer from "./Components/main/footer";
import Header from "./Components/main/header";
import './globals.css'
import Cursor from "./Components/main/cursor";
import { Analytics } from "@vercel/analytics/react"
import logoRockAi from '../public/logo-Rockai.png'
import Head from "next/head";


export const metadata = {
  title: "Rockai Dev company - شركة روكاي ديف",
  description: "The Best Programming Company in Egypt and Middel East | Specialists in various fields of programming and professionals in helping you build a permanent brand on the Internet | أفضل شركة برمجة في مصر والشرق الأوسط",
};

export const viewport = {
  themeColor: '#020940',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="og:image" content={logoRockAi} />
      </Head>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <Cursor />
        <Script src="JS/main.js" />
        <Analytics />
      </body>
    </html>
  );
}
