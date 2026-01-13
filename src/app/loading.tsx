"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Preloader = () => {
  return (
    <div className="w-full min-h-screen fixed inset-0 bg-background z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <span className="relative transition w-147 h-33">
          <Image
            src={"logo.svg"}
            alt="Logo"
            fill
            style={{objectFit: "contain"}}
            loading="eager"
          />
        </span>
      </motion.div>
    </div>
  );
};

export default Preloader;