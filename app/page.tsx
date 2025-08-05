import Image from "next/image";
import Heading from "./sections/Heading";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import TryOwn from "./sections/TryOwn";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chrdk - app for organizing your belongings",
  description:
    "Organize your belongings with the smart Chrdk app. Semantic search, photos, usage history, and shared access for the whole family. Download for free!",
  keywords: [
    "organizing belongings",
    "home storage",
    "item tracking",
    "semantic search",
    "mobile app",
    "home inventory",
  ],
  authors: [{ name: "Chrdk Team" }],
  creator: "Chrdk",
  publisher: "Chrdk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cherdak.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chrdk - app for organizing your belongings",
    description:
      "Organize your belongings with the smart Chrdk app. Semantic search, photos, usage history, and shared access for the whole family.",
    url: "https://cherdak.app",
    siteName: "Chrdk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chrdk - app for organizing belongings",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrdk - app for organizing your belongings",
    description:
      "Organize your belongings with the smart Chrdk app. Semantic search, photos, usage history.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Menu />
      <Heading />
      <Features />
      <HowItWorks />
      <TryOwn />
      <Footer />
    </main>
  );
}
