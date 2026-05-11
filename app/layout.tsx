import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a1f44",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DPL Butibori — Live Scores, News, Fixtures & Videos",
  description:
    "Official home of DPL Butibori — Vidarbha's premier tennis-ball cricket league. Live scores, match center, news, points table, top performers, fixtures and videos. Powered by TennisCricket.in.",
  keywords: [
    "DPL Butibori",
    "Tennis Ball Cricket",
    "Vidarbha Cricket",
    "Live Scores",
    "TennisCricket.in",
    "Cricket News",
  ],
  openGraph: {
    title: "DPL Butibori — Live Scores, News & Videos",
    description:
      "Live scores, news, points table and videos from Vidarbha's premier tennis-ball cricket league.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="bg-page text-body font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
