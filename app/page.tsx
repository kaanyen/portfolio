import { Hero } from "@/components/hero/Hero";
import { FeaturedWork } from "@/components/work/FeaturedWork";
import { Experience } from "@/components/about/Experience";
import { Writing } from "@/components/about/Writing";
import { ScrollToHash } from "@/components/chrome/ScrollToHash";

export default function Home() {
  return (
    <main>
      <ScrollToHash />
      <Hero />
      <FeaturedWork />
      <Writing />
      <Experience />
    </main>
  );
}
