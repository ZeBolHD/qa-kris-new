"use client";

import { useState } from "react";
import { Question } from "../types";
import QuestionListItem from "./QuestionListItem";

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  const [currentOpenQuestionIndex, setCurrentOpenQuestionIndex] = useState<number | null>();

  const handleOpen = (questionIndex: number) => {
    if (currentOpenQuestionIndex === questionIndex) {
      setCurrentOpenQuestionIndex(null);
    } else {
      setCurrentOpenQuestionIndex(questionIndex);
    }
  };

  return (
    <dl>
      <ul className="w-full flex flex-col gap-[16px]">
        {questions.map((question, index) => (
          <QuestionListItem
            key={question.title}
            {...question}
            handleOpen={() => handleOpen(index)}
            isOpen={currentOpenQuestionIndex === index}
          />
        ))}
      </ul>
    </dl>
  );
};

export default QuestionList;
