"use client";

import { useRef } from "react";

import { useTruncatedElement } from "@/hooks/useTruncatedElement";
import Modal from "@/app/_components/Modal";
import { Review } from "./types";
import ReviewCardHeading from "./ReviewCardHeading";

const ReviewCard = ({ text, author, image, position }: Review) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement({ ref });

  const toggleModal = () => setIsReadingMore((prev) => !prev);

  return (
    <>
      <li
        className={
          "flex flex-col min-w-[325px] gap-[10px] text-left text-black bg-white rounded-md p-[24px] hover:shadow-xl transition-all duration-300"
        }
      >
        <ReviewCardHeading author={author} image={image} position={position} />
        <p ref={ref} className="line-clamp-[12] whitespace-pre-line font-light">
          {text}
        </p>
        {isTruncated && (
          <span className="cursor-pointer font-bold" onClick={toggleModal}>
            подробнее
          </span>
        )}
      </li>
      {isReadingMore && (
        <Modal onClose={toggleModal} isOpen={isReadingMore}>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="mt-[14px] whitespace-pre-line text-[18px]">{text}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ReviewCard;
