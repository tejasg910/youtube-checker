import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'Channel Checker - Check if YouTube Channel Exists | Free YouTube Channel Search Tool',
  description: 'Free YouTube Channel checker tool to instantly check if a YouTube channel exists. Search any YouTube channel name, verify channel existence, and find similar channels. Best free tool for content creators and viewers.',
  keywords: [
    'youtube channel checker',
    'check youtube channel exists',
    'youtube channel search',
    'channel existence checker',
    'find youtube channels',
    'youtube channel verification',
    'youtube channel lookup',
    'check channel availability',
    'youtube channel search tool',
    'find similar youtube channels',
    'youtube channel name checker',
    'youtube channel verification tool',
    'free youtube channel finder',
    'youtube channel identifier',
    'youtube channel search engine'
  ],
  openGraph: {
    title: 'Channel Checker - Check if YouTube Channel Exists | Free YouTube Channel Search Tool',
    description: 'Free YouTube Channel Finder tool to instantly check if a YouTube channel exists. Search any YouTube channel name, verify channel existence, and find similar channels.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Channel Finder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Channel Finder - Check if YouTube Channel Exists',
    description: 'Free YouTube Channel Finder tool to instantly check if a YouTube channel exists. Search any YouTube channel name and verify channel existence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="canonical" href="https://yourdomain.com" />
        {/* Add your favicon here */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}