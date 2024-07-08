"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { cn } from "@/lib/util";
import { FAQ } from "@/types";

interface FAQListItemProps extends FAQ {
  isOpen: boolean;
  handleOpen: () => void;
}

export const FAQListItem = ({ question, answer, isOpen, handleOpen }: FAQListItemProps) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (answerRef.current) {
      setContentHeight(answerRef.current.clientHeight);
    }
  }, [isOpen]);

  return (
    <li
      className="p-[24px] rounded-lg bg-white shadow-lg cursor-pointer w-full h-full mt-[25px] break-inside-avoid-column"
      onClick={handleOpen}
    >
      <dt className="w-full flex items-center gap-[10px] justify-between h-fit">
        <h4 className="text-[20px] font-semibold">{question}</h4>
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
        className={cn("transition-all duration-300 overflow-hidden w-full", isOpen && "mt-[10px]")}
      >
        <div ref={answerRef}>
          <dd>
            <p className="text-[16px] font-light opacity-50 leading-snug">{answer}</p>
          </dd>
        </div>
      </div>
    </li>
  );
};
