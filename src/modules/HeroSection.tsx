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
          className="absolute left-[10%] top-7 h-16.75 w-16.75"
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
          className="absolute right-0 top-34 h-13 w-36"
          animate={{ y: ["0rem", "0.5rem", "0rem"] }}
          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "loop" } }}
        ></motion.span>
      </div>
    </section>
  )
};

export default HeroSection;