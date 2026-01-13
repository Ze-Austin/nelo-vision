"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center justify-center mt-40"
    >
      <div className="flex flex-col gap-12 py-8">
        <div className="relative flex flex-col">
          <h1 className="text-center text-(--primary)">
            VISIONEERING 2026
          </h1>
          <h1 className="text-center text-(--primary)">
            with NELO
          </h1>
          <span
            className="absolute -z-1 -bottom-1 right-1/2 translate-x-[94%] bg-(--orange) w-42 h-4.75"
          ></span>
        </div>
        <div className="flex flex-col items-center gap-8">
          <span className="max-w-130 text-hero">
            A Spirit-Led, Strategy-Supported Life Design & Vision Crafting Experience for a Year Of Divine Realignment, Intentional Repositioning, and Visionary Execution.
          </span>
          <button type="button" className="btn btn-md">
            Register Now
          </button>
        </div>
        <motion.span
          className="absolute left-[10%] top-7 w-16.75 h-16.75"
          animate={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Image
            src={"asterisk.svg"}
            alt="Rotating Asterisk"
            fill
            style={{objectFit: "contain"}}
          />
        </motion.span>
        <motion.span
          className="absolute right-[10%] top-4 w-17.25 h-17.75"
          animate={{ y: ["0rem", "0.5rem", "0rem"] }}
          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "loop" } }}
        >
          <Image
            src={"bouncing-1.svg"}
            alt="Bouncing Icon"
            fill
            style={{objectFit: "contain"}}
          />
        </motion.span>
        <motion.span
          className="absolute left-[16%] bottom-28 w-17.25 h-17.75"
          animate={{ y: ["0.5rem", "0rem", "0.5rem"] }}
          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "loop" } }}
        >
          <Image
            src={"bouncing-2.svg"}
            alt="Bouncing Icon"
            fill
            style={{objectFit: "contain"}}
          />
        </motion.span>
        <div
          className="flex flex-col items-center gap-4 absolute right-[16%] bottom-36"
        >
          <motion.span
            className="w-9.75 h-9.75 rounded-full bg-(--secondary)"
            animate={{ y: ["0rem", "0.8rem", "0rem"] }}
            transition={{ y: { duration: 1.5, repeat: Infinity, repeatType: "loop" } }}
          ></motion.span>
          <span className="w-15.75 h-4.25 bg-(--secondary)"></span>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;