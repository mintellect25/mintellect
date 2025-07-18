import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./sections/navbar";
import HomeSection from "./sections/home";
import ProblemSection from "./sections/problem";
import Solution from "./sections/solutions";
import BenefitSection from "./sections/benefits";
import ContactSection from "./sections/contact";
import AboutSection from "./sections/about";
import Footer from "./sections/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <HomeSection />
        <AboutSection />
        <ProblemSection />
        <Solution />
        <BenefitSection />
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
