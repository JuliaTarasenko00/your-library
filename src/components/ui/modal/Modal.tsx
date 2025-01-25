import { FC, MouseEvent, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
  isOpen: boolean;
}

const modalRoot: HTMLDivElement = document.getElementById(
  'modal',
) as HTMLDivElement;

export const Modal: FC<ModalProps> = ({ children, closeModal, isOpen }) => {
  const onClickOverlay = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <div
      className={`relative z-10 ${isOpen ? 'h-100% w-100% opacity-100' : 'h-0 w-0 opacity-0'} transition duration-[450ms] ease-out`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${isOpen ? 'h-100% w-100% opacity-100' : 'h-0 w-0 opacity-0'} fixed inset-0 transition duration-[450ms] ease-out`}
        aria-hidden="true"
      ></div>

      <div
        className={`fixed inset-0 ${isOpen ? 'h-100% w-100% opacity-100' : 'h-0 w-0 opacity-0'} z-10 w-screen overflow-y-auto transition duration-[450ms] ease-out`}
      >
        <div
          className={`flex min-h-full items-end justify-center ${isOpen ? 'h-100% w-100% opacity-100' : 'h-0 w-0 opacity-0'} bg-[#14141499] p-4 text-center transition duration-[450ms] ease-out sm:items-center sm:p-0`}
          onClick={onClickOverlay}
        >
          <div
            className={`relative rounded-[12px] border-[1px] border-[#68686833] bg-[#1F1F1F] p-[50px]`}
          >
            <button
              type="button"
              className="absolute right-[16px] top-[16px] h-[22px] w-[22px]"
              onClick={closeModal}
            >
              <IoClose />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};
