import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { FinalCTAAndFooter } from "@/components/Footer";
import ChatAgent from "@/components/ChatAgent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ANTERA",
  description: "Advanced Neural Technologies & Engineering Research Agency",
  icons: {
    icon: "/Nawwi-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <LanguageProvider>
          <div className="min-h-screen bg-white text-[#1F1F1F] selection:bg-[#FA520F]/30">
            <Navbar />
            <main>{children}</main>
            <FinalCTAAndFooter />
            <ChatAgent />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
