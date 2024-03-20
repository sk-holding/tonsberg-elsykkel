import { Roboto_Flex } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
