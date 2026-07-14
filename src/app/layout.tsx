import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NestHaven - Find your perfect rental property",
  description: "Find your ideal rental property with NestHaven. Browse our wide selection of homes and apartments.",
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var s=(t||"system")==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":t;document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(s);document.documentElement.style.colorScheme=s}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:text-slate-100">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider defaultTheme="system">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}