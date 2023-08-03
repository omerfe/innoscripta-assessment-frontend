import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AllTheNews",
  description:
    "Stay informed and up-to-date with the latest news and articles from around the world. Allthenews brings you breaking news, trending stories, and in-depth analysis on a wide range of topics and categories. Explore news from reliable sources and get the facts you need at your fingertips. Start reading the news that matters to you today!",
  applicationName: "AllTheNews",
  keywords: [
    "news",
    "articles",
    "breaking news",
    "trending stories",
    "world news",
    "local news",
    "news today",
    "news headlines",
    "news articles",
  ],
  creator: "Coldgroove",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} text-stone-900 dark:text-stone-100 bg-stone-200 dark:bg-stone-900`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
