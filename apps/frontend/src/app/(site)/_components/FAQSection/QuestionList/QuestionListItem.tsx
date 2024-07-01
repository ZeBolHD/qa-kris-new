"use client";

import { useEffect, useRef, useState } from "react";
import { Question } from "../types";
import Image from "next/image";
import { cn } from "@/lib/util";

const QuestionListItem = ({ title, text }: Question) => {
  const [isOpen, setIsOpen] = useState(false);

  const answerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setContentHeight(answerRef.current.clientHeight);
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li
      className="w-full p-[24px] rounded-lg bg-white shadow-lg cursor-pointer"
      onClick={handleOpen}
    >
      <dt className="w-full h-fit flex items-center gap-[10px] justify-between">
        <h4 className="text-[20px] font-semibold">{title}</h4>
        <Image
          src="/faq/arrow.svg"
          width={24}
          height={24}
          alt=""
          className={cn(
            "w-[24px] h-[24px] fill-black transition-transform duration-200 select-none",
            isOpen && "rotate-180",
          )}
        />
      </dt>
      <div
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
        className={cn("transition-all duration-300 overflow-hidden w-full")}
      >
        <dd ref={answerRef}>
          <p className="text-[16px] font-light opacity-40 leading-snug">{text}</p>
        </dd>
      </div>
    </li>
  );
};

export default QuestionListItem;
