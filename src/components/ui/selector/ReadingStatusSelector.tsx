import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const options = ['Unread', 'In progress', 'Done', 'All books'];

export const ReadingStatusSelector = () => {
  const [option, setOption] = useState<string>(options[options.length - 1]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-[153px] max-w-[153px] items-center justify-between rounded-[12px] border-[1px] border-[#3E3E3E] p-[12px] md:p-[14px]"
      >
        {option}{' '}
        <MdOutlineKeyboardArrowDown
          className={`h-[22px] w-[22px] ${isOpen ? 'rotate-[180deg]' : ''} transition-custom`}
        />
      </button>
      <ul
        className={`absolute top-[116%] flex w-full flex-col gap-[7px] overflow-hidden rounded-[12px] bg-[#262626] p-[14px] shadow-lg ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } transition-custom`}
      >
        {options.map((el: string) => (
          <li
            key={el}
            className={` ${el === option ? 'cursor-default text-[#F9F9F9]' : 'cursor-pointer text-[#686868]'} transition-custom text-[12px] leading-[18px] md:text-[14px]`}
            onClick={(ev: React.MouseEvent<HTMLElement>) => {
              const target = ev.target as HTMLElement;
              setOption(target.textContent ?? '');
            }}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
