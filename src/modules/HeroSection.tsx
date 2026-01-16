"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="intro"
      className="relative flex items-center justify-center mt-23 lg:mt-40 px-4 lg:px-0"
    >
      <div className="flex flex-col gap-8 lg:gap-12 py-8">
        <div className="relative flex flex-col items-center">
          <h1 className="text-center text-(--primary) max-w-71.75 lg:max-w-160 ">
            VISIONEERING 2026 with NELO
          </h1>
          <span
            className="absolute -z-1 bottom-0 lg:-bottom-1 right-1/2 translate-x-1/2 lg:translate-x-[94%] bg-(--orange) w-25 lg:w-42 h-4 lg:h-4.75"
          ></span>
        </div>
        <div className="flex flex-col items-center gap-8">
          <span className="lg:max-w-130 text-hero">
            A Spirit-Led, Strategy-Supported Life Design & Vision Crafting Experience for a Year Of Divine Realignment, Intentional Repositioning, and Visionary Execution.
          </span>
          <Link href={"https://selar.com/3963gmx327"} target="_blank">
            <button type="button" className="btn btn-md">
              Register Now
            </button>
          </Link>
        </div>
        <motion.span
          className="absolute -z-1 left-[5%] lg:left-[10%] top-0 lg:top-7 w-9.5 h-9.5 lg:w-16.75 lg:h-16.75"
          animate={{ rotate: 180 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Image
            src={"asterisk.svg"}
            alt="Rotating Asterisk"
            fill
            style={{objectFit: "contain"}}
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.span>
        <motion.span
          className="absolute -z-1 right-[10%] -top-4 w-9 h-8.75 lg:w-17.25 lg:h-17.75"
          animate={{ y: ["0rem", "0.5rem", "0rem"] }}
          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "loop" } }}
        >
          <Image
            src={"bouncing-1.svg"}
            alt="Bouncing Icon"
            fill
            style={{objectFit: "contain"}}
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.span>
        <motion.span
          className="absolute -z-1 left-[13%] lg:left-[16%] top-28 lg:top-48 w-10 h-9.25 lg:w-17.25 lg:h-17.75"
          animate={{ y: ["0.5rem", "0rem", "0.5rem"] }}
          transition={{ y: { duration: 2, repeat: Infinity, repeatType: "loop" } }}
        >
          <Image
            src={"bouncing-2.svg"}
            alt="Bouncing Icon"
            fill
            style={{objectFit: "contain"}}
            loading="eager"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.span>
        <div
          className="flex flex-col items-center gap-4 absolute -z-1 right-[12%] lg:right-[16%] top-22 lg:top-32"
        >
          <motion.span
            className="w-5.25 h-5.25 lg:w-9.75 lg:h-9.75 rounded-full bg-(--secondary)"
            animate={{ y: ["0rem", "0.8rem", "0rem"] }}
            transition={{ y: { duration: 1.5, repeat: Infinity, repeatType: "loop" } }}
          ></motion.span>
          <span className="w-8.5 h-2.25 lg:w-15.75 lg:h-4.25 bg-(--secondary)"></span>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;