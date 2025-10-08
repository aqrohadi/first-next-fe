import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cari Kantor Mewah Murah Aman",
    template: "%s | Cari Kantor Mewah Murah Aman",
  },
  description: "Platform untuk mencari kantor mewah murah dan aman",
  keywords: [
    "Kantor",
    "Sewa Kantor",
    "Cari Kantor",
    "Kantor Murah",
    "Kantor Mewah",
    "Kantor Aman",
  ],
  openGraph: {
    title: "Cari Kantor Mewah Murah Aman",
    description: "Platform untuk mencari kantor mewah murah dan aman",
    url: 'https://imamaqrom.com',
    siteName: 'OfficeSpace',
    images: [
      {
        url: '/assets/og.png',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
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
        {children}
      </body>
    </html>
  );
}
