import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { modelName } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maulana Ibrahim | Model | Software Engineer",
  description: `Meet Maulana Ibrahim, a software engineer and part-time model from Jakarta. Maulana's modeling career began unexpectedly during a friend's photography project, sparking a passion that turned into a rewarding side hustle.`,
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
