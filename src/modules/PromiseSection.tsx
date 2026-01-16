import { GreenTick } from "@/theme/icons";
import Link from "next/link";

const PromiseSection = () => {
  return (
    <section
      id="promise"
      className="bg-[#ECF6ED] flex flex-col items-center gap-4 lg:gap-12 px-12 lg:px-20 py-8 lg:py-16"
    >
      <h4 className="text-center max-w-64 lg:max-w-120">
        THE VISIONEERING 2026 PROMISE
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-6 h-4.25 lg:w-10 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Decisive Clarity
            </span>
            <span className="text-3xs">
              Gain an unmistakable understanding of the divine priorities shaping your focus and direction for 2026.
            </span>
          </div>
        </div>
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-8 h-4.25 lg:w-12 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Strategic Life Direction
            </span>
            <span className="text-3xs">
              Walk away with a practical, integrated roadmap guiding your goals, relationships, vocation, enterprise, ministry, and financial stewardship.
            </span>
          </div>
        </div>
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-6 h-4.25 lg:w-10 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Inner Renewal & Reset
            </span>
            <span className="text-3xs">
              Disengage from limiting patterns, resolve emotional weight, and step into the year restored, steady, and strengthened.
            </span>
          </div>
        </div>
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-6 h-4.25 lg:w-10 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Execution Infrastructure
            </span>
            <span className="text-3xs">
              Access proven tools, frameworks, and templates that streamline effort, increase output, and reduce unnecessary strain.
            </span>
          </div>
        </div>
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-8 h-4.25 lg:w-12 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Foresight Intelligence
            </span>
            <span className="text-3xs">
              Receive insight into emerging shifts and directional signals that position you advantageously amid global change and uncertainty.
            </span>
          </div>
        </div>
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-6 h-4.25 lg:w-10 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Aligned Community & Strategic Relationships
            </span>
            <span className="text-3xs">
              Connect with purpose-driven individuals who contribute value, sharpen thinking, and amplify collective impact.
            </span>
          </div>
        </div>
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-6 h-4.25 lg:w-10 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Assignment Alignment
            </span>
            <span className="text-3xs">
              Re-anchor to your mandate and reawaken the identity and capacity entrusted to you for this season.
            </span>
          </div>
        </div>
        <div
          className="flex gap-2 lg:gap-4 bg-background rounded-md px-4 lg:px-6 py-2 lg:py-4"
        >
          <span className="icon-wrapper w-6 h-4.25 lg:w-10 lg:h-8">
            <GreenTick />
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-2xs">
              Spiritual Empowerment
            </span>
            <span className="text-3xs">
              Be infused with fresh grace, renewed strength, inspired ideas, and divine acceleration for the year ahead.
            </span>
          </div>
        </div>
      </div>
      <Link href="/#tickets">
        <button type="button" className="btn btn-md">
          Book a seat
        </button>
      </Link>
    </section>
  )
};

export default PromiseSection;