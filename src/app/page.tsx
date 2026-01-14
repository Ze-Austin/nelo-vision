import AboutSection from "@/modules/AboutSection";
import CarouselSection from "@/modules/CarouselSection";
import HeroSection from "@/modules/HeroSection";
import IntroSection from "@/modules/IntroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <IntroSection />
      <AboutSection />
    </main>
  );
}
