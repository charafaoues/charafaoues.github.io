import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/component/Footer";
export const metadata: Metadata = {
  title: "Aoues charaf eddine",
  description:
    "Portfolio of Aoues Charaf, a web developer specializing in modern web applications, React, Next.js, and software development.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="ns_S_tFs1rUotx6Gp-FsRTM7YKmo34I0eSoQDNjcrpo"
      />
      <body cz-shortcut-listen="true" className={inter.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
