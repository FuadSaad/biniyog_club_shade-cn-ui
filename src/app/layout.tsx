import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const notoBengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: ["400", "500", "600", "700", "800", "900"], variable: "--font-bangla" });

export const metadata: Metadata = {
  title: "Biniyog Club | Interest-Free Business Ecosystem",
  description: "Invest in real, vetted businesses. Build a brighter, prosperous Bangladesh together with Halal and Shariah-compliant opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="font-sans antialiased bg-[#F6FAF8] text-[#112820]">
        {children}
      </body>
    </html>
  );
}
