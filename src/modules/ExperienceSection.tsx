"use client";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center gap-4 lg:gap-8 p-6 pt-24 lg:pt-8 lg:pb-16 lg:px-16"
    >
      <div
        className="flex flex-col items-center gap-4 text-center w-full"
      >
        <h4 className="max-w-64 lg:max-w-120">
          THE VISIONEERING RETREAT EXPERIENCE
        </h4>
        <span className="text-xs md:max-w-140">
          Step into an intentionally engineered immersion, crafted to sharpen discernment, usher you into unexplored possibilities, and establish your visions for a year marked by wonder and decisive execution.
        </span>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1 md:px-0"
      >
        <div
          className="flex flex-col gap-4 px-4 py-6 h-77.25 lg:h-120 rounded-xl bg-[#EFF7F0]"
        >
          <div
            className="flex items-center justify-between"
          >
            <span className="text-xl max-w-50 lg:max-w-60">
              Revelatory Opening Session
            </span>
            <span className="relative w-9.5 h-9.5 md:w-13.25 md:h-13.25">
              <Image
                src={"/exp/arrow.svg"}
                alt="Nelo Nwokike"
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </span>
          </div>
          <div className="flex flex-col text-sm">
            <span>
              Our Insight-immersed Sessions are acceleration chambers - delivering spiritual tools, guided declarations, and strategic activation that restore agency, awaken creativity, and unlock economic pathways for dominion and decisive execution.
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 px-4 py-6 h-77.25 lg:h-120 rounded-xl bg-[#FFFAED]"
        >
          <div
            className="flex items-center justify-between"
          >
            <span className="text-xl max-w-50 lg:max-w-60">
              Vision Awakening Questions (VAQs)
            </span>
            <span className="relative w-9.5 h-9.5 md:w-13.25 md:h-13.25">
              <Image
                src={"/exp/play.svg"}
                alt="Nelo Nwokike"
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </span>
          </div>
          <div className="flex flex-col text-sm">
            <span>
              One of the most awaited components of the experience, you will be guided through the VAQs - a thoughtfully structured reflection process designed to surface clarity, ignite inspired direction, and release the guidance required to steward 2026 with integrity, wisdom, and sound judgment.
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 px-4 py-6 h-77.25 lg:h-120 rounded-xl bg-[#FFF7F1]"
        >
          <div
            className="flex items-center justify-between"
          >
            <span className="text-xl max-w-50 lg:max-w-60">
              Life Architecture Review
            </span>
            <span className="relative w-9.5 h-9.5 md:w-13.25 md:h-13.25">
              <Image
                src={"/exp/user.svg"}
                alt="Nelo Nwokike"
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </span>
          </div>
          <div className="flex flex-col text-sm">
            <span>
              Through the 12-Dimension Life Compass, you will step into a structured review of the principal domains shaping your life and inner reality. This elevated overview reveals patterns, pressure points, and progress—equipping you to reconstruct your Life Architecture with intention. The journey concludes with a personalised Coaching Strategy to address weak foundations, realign direction, and install life-giving systems and habits.
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 px-4 py-6 h-77.25 lg:h-120 rounded-xl bg-[#FFF7F1]"
        >
          <div
            className="flex items-center justify-between"
          >
            <span className="text-xl max-w-50 lg:max-w-66">
              Strategic Goal Setting & Execution Architecture
            </span>
            <span className="relative w-9.5 h-9.5 md:w-13.25 md:h-13.25">
              <Image
                src={"/exp/target.svg"}
                alt="Nelo Nwokike"
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </span>
          </div>
          <div className="flex flex-col text-sm">
            <span>
              In my role as your Coach, I will guide you into transformative clarity, unveiling the decisive focus and movement required for 2026—positioning you to convert disruption into leverage and ascend with authority. This session bridges insight and implementation, translating what is revealed into usable frameworks, operational systems, and disciplined daily practice.
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 px-4 py-6 h-77.25 lg:h-120 rounded-xl bg-[#EFF7F0]"
        >
          <div
            className="flex items-center justify-between"
          >
            <span className="text-xl max-w-50 lg:max-w-66">
              Strategic Relationships & High-Impact Alliances
            </span>
            <span className="relative w-9.5 h-9.5 md:w-13.25 md:h-13.25">
              <Image
                src={"/exp/clover.svg"}
                alt="Nelo Nwokike"
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </span>
          </div>
          <div className="flex flex-col text-sm">
            <span>
              Our Visioning Summits and Retreats create intentional space for you to encounter purpose-aligned collaborators - leaders, ministers, builders, innovators, and vision-driven achievers positioned to walk with you in this season. An avenue where meaningful relationships are formed with people who share your convictions, carry similar burdens, exercise leadership with clarity, and pursue destiny with urgency.
            </span>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 px-4 py-6 h-77.25 lg:h-120 rounded-xl bg-[#FFFAED]"
        >
          <div
            className="flex items-center justify-between"
          >
            <span className="text-xl max-w-50 lg:max-w-60">
              Spirit-Immersed Activation
            </span>
            <span className="relative w-9.5 h-9.5 md:w-13.25 md:h-13.25">
              <Image
                src={"/exp/asterisk.svg"}
                alt="Nelo Nwokike"
                fill
                style={{objectFit: "contain"}}
                loading="eager"
              />
            </span>
          </div>
          <div className="flex flex-col text-sm">
            <span>
              Through sacred worship and immersive Visionary Art encounters, we will formally consecrate the year ahead - establishing 2026 with authoritative declarations, strategic activations, Scriptural affirmations, and a clear commissioning. This session unfolds within a charged spiritual environment where divine intervention is tangible, transformation is ignited, and grace is imparted with precision—marking participants for alignment, empowerment, and forward momentum.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ExperienceSection;