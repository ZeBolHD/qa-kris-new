"use client";

import { cn } from "@/lib/util";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const targetSections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    targetSections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <nav className="w-fit h-full max-sm:hidden">
      <ul className="flex gap-[24px] h-full text-[20px] font-semibold">
        <li>
          <a
            href="#"
            className={cn(
              activeSection === "hero" && "text-primary-pink",
              "hover:text-primary-pink transition duration-200",
            )}
          >
            Главная
          </a>
        </li>
        <li>
          <a
            href="#program"
            className={cn(
              activeSection === "program" && "text-primary-pink",
              "hover:text-primary-pink transition duration-200",
            )}
          >
            Программа
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={cn(
              activeSection === "about" && "text-primary-pink",
              "hover:text-primary-pink transition duration-200",
            )}
          >
            Об авторе
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className={cn(
              activeSection === "faq" && "text-primary-pink",
              "hover:text-primary-pink transition duration-200",
            )}
          >
            Вопрос-ответ
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className={cn(
              activeSection === "reviews" && "text-primary-pink",
              "hover:text-primary-pink transition duration-200",
            )}
          >
            Отзывы
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className={cn(
              activeSection === "pricing" && "text-primary-pink",
              "hover:text-primary-pink transition duration-200",
            )}
          >
            Стоимость
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
