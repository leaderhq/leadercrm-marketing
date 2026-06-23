import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SwRegister } from "./sw-register";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadercrm.io"),
  title: "LeaderCRM — The CRM built for field leaders",
  description: "LeaderCRM gives network marketing leaders a simple way to manage contacts, track their pipeline, and follow up with every prospect — without the complexity of traditional CRMs.",
  applicationName: "LeaderCRM",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "LeaderCRM",
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    siteName: "LeaderCRM",
    title: "LeaderCRM — The CRM built for field leaders",
    description: "Manage contacts, track pipeline, and follow up with every prospect — built for network marketing.",
    url: "https://leadercrm.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderCRM — The CRM built for field leaders",
    description: "Manage contacts, track pipeline, and follow up with every prospect — built for network marketing.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1b2e",
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
      <body className="min-h-full flex flex-col">
        {children}
        <SwRegister />
      </body>
    </html>
  );
}
