"use client";

import { useState } from "react";

import { FAQ } from "@/types";
import { FAQListItem } from "./FAQListItem";

interface FAQListProps {
  faqs: FAQ[];
}

export const FAQList = ({ faqs }: FAQListProps) => {
  const [currentOpenFAQIndex, setCurrentOpenFAQIndex] = useState<number | null>();

  const handleOpenQuestion = (index: number) => {
    if (currentOpenFAQIndex === index) {
      setCurrentOpenFAQIndex(null);
    } else {
      setCurrentOpenFAQIndex(index);
    }
  };

  return (
    <dl>
      <ul className="w-full columns-2 gap-x-[46px] max-sm:columns-1">
        {faqs.map((faq, index) => (
          <FAQListItem
            key={faq.question}
            {...faq}
            handleOpen={() => handleOpenQuestion(index)}
            isOpen={currentOpenFAQIndex === index}
          />
        ))}
      </ul>
    </dl>
  );
};
