"use client";

import { useState } from "react";
import { Question } from "../types";
import QuestionListItem from "./QuestionListItem";

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  const [currentOpenQuestionIndex, setCurrentOpenQuestionIndex] = useState<number | null>();

  const handleOpenQuestion = (questionIndex: number) => {
    if (currentOpenQuestionIndex === questionIndex) {
      setCurrentOpenQuestionIndex(null);
    } else {
      setCurrentOpenQuestionIndex(questionIndex);
    }
  };

  return (
    <dl>
      <ul className="w-full grid grid-cols-2 gap-y-[16px] gap-x-[46px]">
        {questions.map((question, index) => (
          <QuestionListItem
            key={question.title}
            {...question}
            handleOpen={() => handleOpenQuestion(index)}
            isOpen={currentOpenQuestionIndex === index}
          />
        ))}
      </ul>
    </dl>
  );
};

export default QuestionList;
