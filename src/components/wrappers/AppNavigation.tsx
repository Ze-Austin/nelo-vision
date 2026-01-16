"use client";
import { useRef, useState } from "react";
import { Hamburger, X } from "@/theme/icons";
import usePageScroll from "@/hooks/usePageScroll";
import Image from "next/image";
import Link from "next/link";

const AppNavigation = () => {
  const { active } = usePageScroll();
  const triggerRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 z-10 w-full px-0"
    >
      <div
        className={`flex justify-between lg:hidden w-full p-4 pb-2 duration-500 transition-all ease-in-out ${active ? "transform backdrop-blur-[20px]" : ""}`}
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </span>
        <div className="flex gap-4 items-center"> 
          <Link href={"https://selar.com/3963gmx327"} target="_blank">
            <button type="button" className="btn btn-sm">
              Book a seat
            </button>
          </Link>
          <span
            className="w-8.25 h-7.75 icon-wrapper cursor-pointer transition hover:scale-105"
            onClick={() => setIsOpen(true)}
          >
            <Hamburger />
          </span>
        </div>
      </div>
      <div
        className={`hidden lg:flex justify-between items-center px-16 py-4 overflow-x-hidden duration-500 transition-all ease-in-out ${active ? "transform backdrop-blur-[20px]" : ""}`}
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
        <Link href={"https://selar.com/3963gmx327"} target="_blank">
          <button type="button" className="btn btn-sm">
            Book a seat
          </button>
        </Link>
      </div>
      {/* Mobile Sidebar */}
      <div
        className={`container flex flex-col gap-8 bg-background/95 rounded-l-2xl h-full w-fit overflow-y-scroll no-scrollbar px-6 py-10 z-20 fixed top-0 right-0 duration-500 transition-all ease-in-out shadow-xl ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        ref={triggerRef}
      >
        <div className="flex justify-end">
          <span
            className="flex justify-center items-center h-8 w-8 bg-(--bgTint) rounded-full cursor-pointer transition hover:scale-105 border border-(--secondary)"
            onClick={() => setIsOpen(false)}
          >
            <span className="icon-wrapper h-3.5 w-3.5">
              <X />
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-8">
          <Link
            href="/#about" className="navlink"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("/#about");
            }}
          >
            About
          </Link>
          <Link
            href="/#experience" className="navlink"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("/#experience");
            }}
          >
            Experience
          </Link>
          <Link
            href="/#promise" className="navlink"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("/#promise");
            }}
          >
            Promise
          </Link>
          <Link
            href="/#tickets" className="navlink"
            onClick={() => {
              setIsOpen(false);
              scrollToSection("/#tickets");
            }}
          >
            Tickets
          </Link>
        </div>
        <Link href={"https://selar.com/3963gmx327"} target="_blank">
          <button type="button" className="btn btn-sm">
            Book a seat
          </button>
        </Link>
      </div>
    </nav>
  )
};

export default AppNavigation;