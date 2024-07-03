import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const portal = document.getElementById("modal");

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      <div
        onClick={handleClose}
        className="fixed inset-0 flex items-center z-[999] justify-center bg-black bg-opacity-60"
      >
        <div className="relative p-[40px] w-[650px] min-h-[480px] max-h-[750px] overflow-y-auto bg-white rounded-lg text-[20px] font-light z-50 animate-rise-up">
          <Image
            src="/close.svg"
            alt="close"
            width={25}
            height={25}
            className="absolute h-[20px] w-[20px] top-[40px] right-[40px] translate-x-1/2 -translate-y-1/2 cursor-pointer max-laptop:top-[15px] max-laptop:right-[15px]"
            onClick={handleClose}
          />
          {children}
        </div>
      </div>
    </>,
    portal!,
  );
};

export default Modal;
