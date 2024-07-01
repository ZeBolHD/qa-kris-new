import { Question } from "../types";
import QuestionListItem from "./QuestionListItem";

interface QuestionListProps {
  questions: Question[];
}

const QuestionList = ({ questions }: QuestionListProps) => {
  return (
    <dl>
      <ul className="w-full flex flex-col gap-[16px]">
        {questions.map((question) => (
          <QuestionListItem key={question.title} {...question} />
        ))}
      </ul>
    </dl>
  );
};

export default QuestionList;
