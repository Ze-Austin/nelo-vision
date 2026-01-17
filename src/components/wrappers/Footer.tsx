"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="flex items-center justify-center bg-(--darkCyan) text-background"
    >
      <div className="relative flex flex-col gap-6 lg:gap-16 px-6 lg:px-16 pt-16 lg:pt-12 pb-12 lg:pb-4 w-full">
        <div className="flex flex-col gap-16 lg:gap-12 items-center">
          <span className="text-footer max-w-193.75">
            Visioneering Retreat 2026 is the bridge that gets you to unlock crystal-clear blueprints, precise patterning, and navigation systems required to steer through the storms of 2026.
          </span>
          <button
            type="button"
            className="btn btn-xl"
            onClick={() => scrollToSection("tickets")}
          >
            Begin your visiononeering journey
          </button>
        </div>
        <div className="flex flex-col-reverse gap-6 lg:gap-0 lg:grid lg:grid-cols-2 items-center">
          <span className="text-copy flex flex-col lg:flex-row items-center gap-1">
            <span>© 2026 VISIONEERING 2026.</span>
            <span>
              All rights reserved. An Initiative of NELO NWOKIKE
            </span>
          </span>
          <span className="text-slogan text-right flex justify-center lg:justify-end gap-4 lg:pr-8">
            <span>ENVISION.</span>
            <span>EXECUTE.</span>
            <span className="text-(--orange)">EMERGE</span>
          </span>
        </div>
        <motion.span
          className="absolute right-[10%] lg:right-[7%] top-32 lg:top-20 w-12.75 h-12.75 lg:w-22.25 lg:h-22.25"
          animate={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Image
            src={"asterisk-2.svg"}
            alt="Rotating Asterisk"
            fill
            style={{objectFit: "contain"}}
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.span>
        <motion.span
          className="absolute left-[3%] lg:left-[7%] top-5 lg:top-22 w-7.75 h-7.25 lg:w-14.75 lg:h-13.75"
          animate={{ y: ["0rem", "0.5rem", "0rem"] }}
          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "loop" }}}
        >
          <Image
            src={"bouncing-footer.svg"}
            alt="Bouncing Icon"
            fill
            style={{objectFit: "contain"}}
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.span>
        <div
          className="flex flex-col items-center gap-4 absolute left-[10%] lg:left-[16%] top-33 lg:top-60 -rotate-12"
        >
          <motion.span
            className="w-6.25 h-6.25 lg:w-11.75 lg:h-11.75 rounded-full bg-(--greenTeal)"
            animate={{ y: ["0rem", "0.8rem", "0rem"] }}
            transition={{ y: { duration: 1.5, repeat: Infinity, repeatType: "loop" } }}
          ></motion.span>
          <span className="w-10 h-2.75 lg:w-19 lg:h-5.25 bg-(--greenTeal)"></span>
        </div>
      </div>
    </footer>
  )
};

export default Footer;