"use client";
import Image from "next/image";

const TargetSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-4 lg:gap-8 px-6 lg:px-16 py-8 lg:py-16"
    >
      <h4 className="text-center">
        WHO IS THIS EXPERIENCE FOR?
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between">
          <div className="flex flex-col text-md text-justify">
            <span>
              The VISIONEERING Retreat is designed for purpose-driven individuals across sectors, vision carriers, founders and chief executives, entrepreneurs, creatives, social change agents, professionals, and students - each navigating pivotal decisions and seeking clarity for what lies ahead.
            </span>
            <br />
            <span>
              If you are drawn toward more clarity, deeper alignment, and decisive breakthrough, this room was created for you.
            </span>
          </div>
          <span className="relative flex w-full h-56.75 lg:h-100.25">
            <Image
              src={"/attendees-1.jpg"}
              alt="Attendees"
              fill
              style={{objectFit: "cover", borderRadius: "8px"}}
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </span>
        </div>
        <div className="flex flex-col lg:gap-8 h-82.75 lg:h-fit">
          <span className="hidden lg:inline w-full h-20 rounded-lg bg-(--primary)"></span>
          <span className="relative flex w-full h-82.75 lg:h-151">
            <Image
              src={"/attendees-2.png"}
              alt="Attendees"
              fill
              style={{objectFit: "cover", borderRadius: "8px"}}
              loading="eager"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </span>
        </div>
      </div>
    </section>
  )
};

export default TargetSection;