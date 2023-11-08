import type { Metadata } from "next";
import { Inter, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const mashanzheng = Ma_Shan_Zheng({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "脆",
  description: "脆的官方认证网页",
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
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
