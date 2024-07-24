import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "University of Waterloo Model United Nations",
  description: "Participate in MUN conferences, improve your public speaking, and engage in global discussions at the University of Waterloo.",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>University of Waterloo Model United Nations</title>
        <link rel="icon" href="./favicon.ico" />
        <meta name="keywords" content="University of Waterloo Model United Nations, University of Waterloo MUN, University of Waterloo, UW Model United Nations, UWMUN, uwmun, UW MUN, MUN, uwmun.ca, uwmun.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
