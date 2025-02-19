import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FC, useEffect, useRef, useState } from 'react';
import { OptionType } from '../../../pages/Library/Library';

interface ReadingStatusSelectorProps {
  options: Array<OptionType>;
  currentOption: string;
  handleChangeCurrentOption: (type: string, option: string) => void;
}

export const ReadingStatusSelector: FC<ReadingStatusSelectorProps> = ({
  options,
  currentOption,
  handleChangeCurrentOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCloseSelector = (ev: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(ev.target as Node)
      ) {
        setIsOpen(false);
        return;
      }
    };

    document.addEventListener('mousedown', handleCloseSelector);

    return () => document.removeEventListener('mousedown', handleCloseSelector);
  }, []);

  return (
    <div className="relative" data-el="filter-books" ref={selectorRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex w-[153px] max-w-[153px] items-center justify-between rounded-[12px] border-[1px] border-[#3E3E3E] p-[12px] md:p-[14px]"
      >
        {currentOption}{' '}
        <MdOutlineKeyboardArrowDown
          className={`h-[22px] w-[22px] ${isOpen ? 'rotate-[180deg]' : ''} transition-custom`}
        />
      </button>
      <ul
        className={`absolute top-[116%] flex w-full flex-col gap-[7px] overflow-hidden rounded-[12px] bg-[#262626] p-[14px] shadow-lg ${
          isOpen
            ? 'max-h-60 max-w-60 opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        } transition-custom`}
      >
        {options.map(({ type, option }) => (
          <li
            key={type}
            className={` ${currentOption === option ? 'cursor-default text-[#F9F9F9]' : 'cursor-pointer text-[#686868]'} transition-custom text-[12px] leading-[18px] md:text-[14px]`}
            onClick={() => {
              handleChangeCurrentOption(type, option);
              setIsOpen(false);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
