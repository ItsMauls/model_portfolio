import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { HOST } from "@/constants/api";
import { p1 } from "@/constants/paragraph";

const inter = Inter({ subsets: ["latin"] });

const title = "Maulana Ibrahim | Model | Software Engineer"


export const metadata: Metadata = {
  title,
  description: p1,
  twitter: {
    card: 'summary_large_image',
    title,
    description: p1,
    images: [`${HOST}/og`], // Must be an absolute URL
  },
  openGraph: {
    title,
    description: p1,
    url: 'https://mauladiputra.site',
    siteName: 'mauladiputra',
    images: [
      {
        url: `${HOST}/og`,
        width: 800,
        height: 600,
      },
      {
        url: `${HOST}/og`,
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'id_ID',
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
      <body className={inter.className}>
      <NavBar />
        {children}
      </body>
    </html>
  );
}
