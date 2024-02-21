import Script from "next/script";
import Footer from "./Components/main/footer";
import Header from "./Components/main/header";
import './globals.css'
import Cursor from "./Components/main/cursor";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Rockai Dev",
  description: "The Best Programming Company in Egypt and Middel East | Specialists in various fields of programming and professionals in helping you build a permanent brand on the Internet | أفضل شركة برمجة في مصر والشرق الأوسط",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
