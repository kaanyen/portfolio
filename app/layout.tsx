import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/chrome/Header";
import { SmoothScroll } from "@/components/chrome/SmoothScroll";
import { PageLoader } from "@/components/chrome/PageLoader";
import { Footer } from "@/components/footer/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Software engineer and AI researcher in Accra. Agent platforms, conversion-ready products, and models that hold under pressure.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description:
      "The systems partner for high-stakes work. Platforms, research, and products from Accra.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="site-shell min-h-full font-body">
        <SmoothScroll />
        <PageLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
