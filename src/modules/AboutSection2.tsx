"use client";
import Image from "next/image";

const AboutSection2 = () => {
  return (
    <section
      className="relative bg-(--bgGreen) w-full flex flex-col lg:flex-row-reverse lg:gap-8 lg:px-16 lg:py-16"
    >
      <div
        className="flex flex-col text-md text-justify p-6 lg:p-0 lg:w-1/2"
      >
        <span className="text-lg">
          OVER 100 VISIONARIES SERVED
        </span>
        <br />
        <span>
          Over the course of 365 days, more than 100 visionaries have experienced our signature retreat experience - and the feedback has been resounding: They want more. This growing demand has given rise to VISIONEERING 2026.
        </span>
        <br />
        <span>
          This annual retreat is led by Nelo Nwokike, widely known within her circle for her prophetic king-crowning calling - a rare fusion of spiritual insight, strategic capacity, and proven competence, distilled through powerful mentoring and coaching expressions.
        </span>
        <br />
        <span>
          What began as an intimate transformational experience is rapidly evolving into one of the most sought-after visionary immersions, attracting leaders, builders, and pathfinders who are ready to clarify vision, assume dominion, and execute with precision.
        </span>
        <br />
        <span>
          VISIONEERING 2026 is not an event. It is an encounter with alignment, authority, and assignment. 2026 is a year of activation and ascent - where concealed capacity is summoned, and you finally operate in the magnitude you were engineered for.
        </span>
      </div>
      <div
        className="flex w-full h-71.25 lg:w-1/2 lg:h-116.5"
      >
        <span className="relative w-full h-71.25 lg:h-116.5">
          <span
            className="absolute -bottom-12 lg:-bottom-18 left-1/2 lg:-left-4 -translate-x-1/2 lg:translate-x-0 w-65.75 lg:w-92.25 h-20.25 lg:h-28.5 bg-[#71B181]"
          ></span>
          <Image
            src={"/prayer.jpg"}
            alt="Nelo Nwokike"
            fill
            style={{objectFit: "cover"}}
            loading="eager"
          />
        </span>
      </div>
    </section>
  )
};

export default AboutSection2;