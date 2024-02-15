import Script from "next/script";
import Footer from "./Components/main/footer";
import Header from "./Components/main/header";
import './globals.css'
import Cursor from "./Components/main/cursor";

export const metadata = {
  title: "Rockai Dev",
  description: "Specialists in various fields of programming and professionals in helping you build a permanent brand on the Internet",
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
      </body>
    </html>
  );
}
