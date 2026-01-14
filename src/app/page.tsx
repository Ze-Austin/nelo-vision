import AboutSection from "@/modules/AboutSection";
import AboutSection2 from "@/modules/AboutSection2";
import CarouselSection from "@/modules/CarouselSection";
import ExperienceSection from "@/modules/ExperienceSection";
import HeroSection from "@/modules/HeroSection";
import IntroSection from "@/modules/IntroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <IntroSection />
      <AboutSection />
      <AboutSection2 />
      <ExperienceSection />
    </main>
  );
}
