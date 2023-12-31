import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jesse Leonard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-62XWJEBBYK"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-62XWJEBBYK');
  `}
        </Script>

        <Navbar />

        {children}
      </body>
    </html>
  );
}
