import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: {
    default: "Chrdk - app for organizing your belongings",
    template: "%s | Chrdk",
  },
  description:
    "Organize your belongings with the smart Chrdk app. Semantic search, photos, usage history, and shared access for the whole family.",
  applicationName: "Chrdk",
  referrer: "origin-when-cross-origin",
  category: "productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Chrdk",
    description:
      "App for organizing and finding your belongings with semantic search and shared access",
    applicationCategory: "LifestyleApplication",
    operatingSystem: ["iOS", "Android"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RUB",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
    publisher: {
      "@type": "Organization",
      name: "Chrdk",
      url: "https://cherdak.app",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
