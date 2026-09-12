import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/chrome/Header";
import { SmoothScroll } from "@/components/chrome/SmoothScroll";
import { PageLoader } from "@/components/chrome/PageLoader";
import { Footer } from "@/components/footer/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { person } from "@/lib/structured-data";
import "./globals.css";

// Both families are variable fonts: omitting `weight` ships one file per
// family that covers every weight (the CSS uses 400–800, including 650).
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  alternates: { canonical: "/" },
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
        <JsonLd data={person} />
        <SmoothScroll />
        <PageLoader />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
