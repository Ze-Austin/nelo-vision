"use client";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section
      className="px-6 lg:px-16 py-4 bg-linear-to-tl from-[#0DDD74]/20 via--[#0DDD74]/10 to-background"
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
      >
        <span className="text-intro">
          VISIONEERING 2026 is a sacred–strategic navigation experience for individuals who sense that God is shifting systems, structures, and assignments - and refuse to move blindly or late. This is where divine direction meets disciplined strategy, equipping you to realign your life, leadership, and vision with heaven’s agenda for now and next.
        </span>
        <span className="flex items-center justify-center w-full h-full">
          <span className="relative w-full lg:w-110.75 h-24 lg:h-32.75">
            <Image
              src={"blunt-triangle.svg"}
              alt="Blunt Triangle"
              fill
            />
          </span>
        </span>
      </div>
    </section>
  )
};

export default IntroSection;