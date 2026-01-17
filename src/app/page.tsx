import AboutSection from "@/modules/AboutSection";
import AboutSection2 from "@/modules/AboutSection2";
import CarouselSection from "@/modules/CarouselSection";
import ExperienceSection from "@/modules/ExperienceSection";
import HeroSection from "@/modules/HeroSection";
import IntroSection from "@/modules/IntroSection";
import PromiseSection from "@/modules/PromiseSection";
import SolutionSection from "@/modules/SolutionSection";
import TargetSection from "@/modules/TargetSection";
import TestimonialSection from "@/modules/TestimonialSection";
import TicketSection from "@/modules/TicketSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CarouselSection />
      <IntroSection />
      <AboutSection />
      <AboutSection2 />
      <ExperienceSection />
      <PromiseSection />
      <TargetSection />
      <SolutionSection />
      <TicketSection />
      <TestimonialSection />
    </main>
  );
}
