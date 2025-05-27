import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RandomNews from "./components/RandomNews";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News",
  description: "news for you where you can find what you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="px-2 md:px-10">
          <Header />
          <Navbar />
          <section className="flex flex-col lg:flex-row gap-4 mt-4">
            {children}
            <RandomNews />
          </section>
        </main>
      </body>
    </html>
  );
}
