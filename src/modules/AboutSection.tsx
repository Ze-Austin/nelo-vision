"use client";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="px-6 lg:px-16 py-8 lg:py-16 bg-linear-to-bl from-[#0DDD74]/20 via-[#0DDD74]/10 to-background"
    >
      <div
        className="flex flex-col-reverse lg:flex-row gap-12 lg:justify-between items-center"
      >
        <div className="flex flex-col gap-2 lg:w-1/2 items-center lg:items-start">
          <h6>
            ABOUT
          </h6>
          <div className="flex flex-col items-center lg:items-start">
            <h5>Welcome to 2026 -</h5>
            <h5>The Year of Emergent Dominion</h5>
          </div>
          <div className="flex flex-col text-md text-justify">
            <span>
              Encoded within every year is its message and mandate, its reservoirs and resources and its own signature story.
            </span>
            <br />
            <span className="font-medium">
              And by insight, we know this: 2026 is not a continuation year. It is a convergence year - A repositioning year. A vision-defining year.
            </span>
            <br />
            <span>
              This is the year that rewards intentional inquirers, status-quo challengers, and bold, barrier-breaking builders. It will not favour the passive, the drifting, or those content to surrender to the dictates of disadvantage. Instead, it will elevate those who rise to craft their own declaration of dominion.
            </span>
            <br />
            <span>
              2026 will propel the prepared into portals of power, and even the unprepared will  be granted a grace-filled grounding for gigantic moves.
            </span>
            <br />
            <span className="font-bold italic">
              VISIONEERING RETREAT IS THE BRIDGE THAT GETS YOU THERE.
            </span>
            <br />
            <span>
              It will download to you crystal-clear blueprints, precise patterning, and navigation systems required to steer through the storms of 2026 without losing vision, velocity, or voice.
            </span>
            <br />
            <span className="font-bold">
              This is not survival setting. This is Dominion Design.
            </span>
          </div>
        </div>
        <div className="flex w-56.25 h-70.75 lg:w-1/2 lg:h-188.25">
          <span className="inline lg:hidden relative w-56.25 h-70.75">
            <Image
              src={"/portrait.png"}
              alt="Nelo Nwokike"
              fill
              style={{objectFit: "cover"}}
              loading="eager"
            />
            <span
              className="absolute bottom-0 left-0 -z-1 w-56.5 h-62 bg-linear-to-bl from-[#0DDD74]/60 via-[#D9A124]/60 to-background"
            ></span>
          </span>
          <span className="hidden lg:inline relative w-full h-188.25">
            <Image
              src={"/portrait.png"}
              alt="Nelo Nwokike"
              fill
              style={{objectFit: "cover"}}
              loading="eager"
            />
            <span
              className="absolute bottom-0 left-0 -z-1 w-full h-190 bg-linear-to-bl from-[#0DDD74]/60 via-[#D9A124]/60 to-background"
            ></span>
          </span>
        </div>
      </div>
    </section>
  )
};

export default AboutSection;