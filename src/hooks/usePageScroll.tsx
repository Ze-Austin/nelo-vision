"use client";
import { useCallback, useEffect, useState } from "react";

const usePageScroll = () => {
  const [active, setActive] = useState("");

  const onPageScroll = useCallback((e: any) => {
    let position = window.scrollY;
    if (position > 20) {
      setActive("active_class");
    } else {
      setActive("");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll, { passive: true });
    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return { active };
};

export default usePageScroll;
