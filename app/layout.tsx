import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/component/Footer";
export const metadata: Metadata = {
  title: "Aoues charaf eddine",
  description: "proffessional portfolio of aoues charaf eddine",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={inter.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
