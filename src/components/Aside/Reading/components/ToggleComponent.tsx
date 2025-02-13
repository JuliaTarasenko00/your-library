import { ReactNode, useState } from 'react';
import { GiSandsOfTime } from 'react-icons/gi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { ProgressChart } from './ProgressChart';
import {
  Book,
  ReadingProgress,
} from '../../../../types/bookWithReadingProgress';

type OptionsType = {
  title: string;
  element: ReactNode;
  description?: string;
};

export const ToggleComponent = ({ book }: { book: Book | null }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const options: OptionsType[] = [
    {
      title: 'Diary',
      element: (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem
          alias excepturi, earum consequuntur sapiente architecto nihil sit
          doloribus pariatur nam aut nobis, temporibus officia esse at. Et, non
          ex!
        </p>
      ),
    },
    {
      title: 'Statistic',
      element: (
        <ProgressChart
          totalPage={book?.totalPages as number}
          progress={book?.progress as ReadingProgress[]}
        />
      ),
      description:
        'Each page, each chapter is a new round of knowledge, a new step towards understanding. By rewriting statistics, we create our own reading history.',
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full">
      <div className="mb-[20px] flex items-center">
        <h2
          className={`text-[20px] font-bold leading-[20px] text-[#F9F9F9] transition-opacity duration-[800ms]`}
        >
          {options[activeIndex].title}
        </h2>

        <div className="ml-auto flex items-center gap-[5px]">
          <button
            type="button"
            onClick={() => handleToggle(0)}
            className={`${activeIndex !== 0 ? 'text-[#686868]' : 'text-[#F9F9F9]'} h-[20px] w-[20px] transition-colors duration-300 hover:text-[#f9f9f9] focus:text-[#f9f9f9]`}
          >
            <GiSandsOfTime />
          </button>
          <button
            type="button"
            onClick={() => handleToggle(1)}
            className={`${activeIndex !== 1 ? 'text-[#686868]' : 'text-[#F9F9F9]'} h-[20px] w-[20px] transition-colors duration-300 hover:text-[#f9f9f9] focus:text-[#f9f9f9]`}
          >
            <AiOutlinePieChart />
          </button>
        </div>
      </div>

      {options[activeIndex].description && (
        <p className="mb-[20px] text-[14px] tracking-tight text-[#686868]">
          {options[activeIndex].description}
        </p>
      )}

      <div className="relative h-max w-full rounded-[12px] bg-[#262626] px-[20px] py-[20px] transition duration-[600ms]">
        {options.map((option: OptionsType, index: number) => {
          return (
            <div
              key={index}
              className={`relative w-full transform overflow-hidden transition duration-[800ms] ${
                activeIndex === index
                  ? 'bottom-0 translate-y-0 opacity-100'
                  : 'pointer-events-none bottom-[-100%] h-0 w-0 translate-y-5 opacity-0'
              }`}
            >
              {activeIndex === index ? <>{option.element}</> : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};
