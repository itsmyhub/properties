import type { Metadata } from "next";

import { Inter } from 'next/font/google';
//import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import { ThemeProvider } from "./theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] });

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "ezHomeShare",
  description: "Feel good on vacation with us...",
};

//Bind error solution (children: React.ReactNode;)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/*
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          */}
          <body className={inter.className}>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main className='container py-10'>{children}</main>
              <Toaster />
            </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
