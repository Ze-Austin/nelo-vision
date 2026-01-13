"use client";
import usePageScroll from "@/hooks/usePageScroll";
import Image from "next/image";
import Link from "next/link";

const AppNavigation = () => {
  const { active } = usePageScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-8 z-10 w-full px-16"
    >
      <div
        className={`flex justify-between items-center px-16 py-4 rounded-[20px] overflow-x-hidden bg-(--bgTint) duration-500 transition-all ease-in-out ${active ? "transform backdrop-blur-[20px]" : ""}`}
      >
        <span
          onClick={() => scrollToSection("/#intro")}
          className="relative w-29.5 h-6.75 cursor-pointer transition hover:scale-105"
        >
          <Image
            src={"logo.svg"}
            alt="Logo"
            fill
            style={{objectFit: "contain"}}
            loading="eager"
          />
        </span>
        <div
          className="flex items-center gap-12"
        >
          <Link
            href="/#about" className="navlink"
            onClick={() => scrollToSection("/#about")}
          >
            About
          </Link>
          <Link
            href="/#experience" className="navlink"
            onClick={() => scrollToSection("/#experience")}
          >
            Experience
          </Link>
          <Link
            href="/#promise" className="navlink"
            onClick={() => scrollToSection("/#promise")}
          >
            Promise
          </Link>
          <Link
            href="/#tickets" className="navlink"
            onClick={() => scrollToSection("/#tickets")}
          >
            Tickets
          </Link>
        </div>
        <button type="button" className="btn btn-sm">
          Book a seat
        </button>
      </div>
    </nav>
  )
};

export default AppNavigation;