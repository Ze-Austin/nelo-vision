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
      className="fixed top-8 z-10 w-full px-4 lg:px-16"
    >
      <div
        className={`flex lg:hidden w-fit p-1 duration-500 transition-all ease-in-out ${active ? "transform backdrop-blur-[20px]" : ""}`}
      >
        <span
          onClick={() => scrollToSection("/#intro")}
          className="relative w-19.5 h-8.75 cursor-pointer transition hover:scale-105"
        >
          <Image
            src={"/logo.png"}
            alt="Logo"
            fill
            style={{objectFit: "cover"}}
            loading="eager"
          />
        </span>
      </div>
      <div
        className={`hidden lg:flex justify-between items-center px-16 py-4 rounded-[20px] overflow-x-hidden bg-(--bgTint) duration-500 transition-all ease-in-out ${active ? "transform opacity-96" : ""}`}
      >
        <span
          onClick={() => scrollToSection("/#intro")}
          className="relative w-25.75 h-11.5 cursor-pointer transition hover:scale-105"
        >
          <Image
            src={"/logo.png"}
            alt="Logo"
            fill
            style={{objectFit: "cover"}}
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