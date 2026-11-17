import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Limari Villanueva Nails | Custom Nails in Houston",
  description:
    "Custom acrylic, Gel-X, and nail art sets by Elmari Villanueva. A private, appointment-only home studio in Houston, TX. Book your set today.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} h-full antialiased`} suppressHydrationWarning
    >
      <body className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-page text-ink" suppressHydrationWarning>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
