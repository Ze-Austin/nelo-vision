"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="flex items-center justify-center bg-(--darkCyan) text-background"
    >
      <div className="relative flex flex-col gap-16 px-16 pt-12 pb-4 w-full">
        <div className="flex flex-col gap-12 items-center">
          <span className="text-footer max-w-193.75">
            Visioneering Retreat 2026 is the bridge that gets you to unlock crystal-clear blueprints, precise patterning, and navigation systems required to steer through the storms of 2026.
          </span>
          <button type="button" className="btn btn-lg">
            Begin your visiononeering journey
          </button>
        </div>
        <div className="grid grid-cols-2 items-center">
          <span className="text-copy">
            © 2026 VISIONEERING 2026. All rights reserved. An Initiative of NELO NWOKIKE
          </span>
          <span className="text-slogan text-right flex justify-end gap-4 pr-8">
            <span>ENVISION.</span>
            <span>EXECUTE.</span>
            <span className="text-(--orange)">EMERGE</span>
          </span>
        </div>
        <motion.span
          className="absolute right-[7%] top-20 w-22.25 h-22.25"
          animate={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
            <Image
            src={"asterisk-2.svg"}
            alt="Rotating Asterisk"
            fill
            style={{objectFit: "contain"}}
            />
        </motion.span>
        <motion.span
          className="absolute left-[7%] top-22 w-14.75 h-13.75"
          animate={{ y: ["0rem", "0.5rem", "0rem"] }}
          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "loop" }}}
        >
            <Image
            src={"bouncing-footer.svg"}
            alt="Rotating Asterisk"
            fill
            style={{objectFit: "contain"}}
            />
        </motion.span>
        <div
          className="flex flex-col items-center gap-4 absolute left-[16%] bottom-36 -rotate-12"
        >
          <motion.span
            className="w-11.75 h-11.75 rounded-full bg-(--greenTeal)"
            animate={{ y: ["0rem", "0.8rem", "0rem"] }}
            transition={{ y: { duration: 1.5, repeat: Infinity, repeatType: "loop" } }}
          ></motion.span>
          <span className="w-19 h-5.25 bg-(--greenTeal)"></span>
        </div>
      </div>
    </footer>
  )
};

export default Footer;