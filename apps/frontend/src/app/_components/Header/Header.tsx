"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/util";

import { ConsultationButton } from "../ConsultationButton";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "mt-[48px] py-[5px] px-[10px]  text-white z-[999]",
        "transition-all duration-200",
        isSticky ? "bg-white sticky top-0 text-black bg-opacity-80 w-full" : "bg-transparent",
      )}
    >
      <div className="container flex justify-between items-center">
        <Logo />
        <Navigation />
        <ConsultationButton text="Консультация" transparent />
      </div>
    </header>
  );
};

export default Header;
