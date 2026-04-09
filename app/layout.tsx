import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zentrixa-marketing.com"),
  title: {
    default: "Zentrixa Marketing | Wikipedia Writing, Fan Art, Animation & Branding",
    template: "%s | Zentrixa Marketing",
  },
  description:
    "Zentrixa Marketing delivers Wikipedia writing, fan art, comic books, animation, and creative branding services to help businesses grow globally.",
  keywords: [
    "Zentrixa Marketing",
    "creative studio",
    "Wikipedia page creation",
    "fan art services",
    "comic book design",
    "animation services",
    "branding agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Zentrixa Marketing",
    title: "Zentrixa Marketing | Wikipedia Writing, Fan Art, Animation & Branding",
    description:
      "From Wikipedia writing to fan art, comics, and animation, Zentrixa Marketing provides end-to-end creative services for modern brands.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentrixa Marketing | Wikipedia Writing, Fan Art, Animation & Branding",
    description:
      "Wikipedia writing, fan art, comic books, animation, and branding services to elevate your business presence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
