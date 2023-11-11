import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Ma_Shan_Zheng } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const mashanzheng = Ma_Shan_Zheng({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cuikmns.vercel.app"),
  title: "脆",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["kmns", "KMNS", "脆"],
  description: "脆的官方认证网页",
  openGraph: {
    title: "脆|官方网站",
    description: "脆的官方认证网页",
    images: [{ url: "/cui-og.png", type: "png" }],
    url: "https://cuikmns.vercel.app",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
