import { ReactNode, useState } from 'react';
import { GiSandsOfTime } from 'react-icons/gi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { ProgressChart } from './ProgressChart';
import {
  Book,
  ReadingProgress,
} from '../../../../types/bookWithReadingProgress';
import './stylewebkit.css';
import { DiaryChart } from './DiaryChart';

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
      element: <DiaryChart progress={book?.progress} />,
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
        <h2 className={`text-[20px] font-bold leading-[20px] text-[#F9F9F9]`}>
          {options[activeIndex].title}
        </h2>

        <div className="ml-auto flex items-center gap-[5px]">
          <button
            type="button"
            onClick={() => handleToggle(0)}
            className={`${activeIndex !== 0 ? 'text-[#686868]' : 'text-[#F9F9F9]'} h-[20px] w-[20px] outline-none transition-colors duration-300 hover:text-[#f9f9f9] focus:text-[#f9f9f9]`}
          >
            <GiSandsOfTime />
          </button>
          <button
            type="button"
            onClick={() => handleToggle(1)}
            className={`${activeIndex !== 1 ? 'text-[#686868]' : 'text-[#F9F9F9]'} h-[20px] w-[20px] outline-none transition-colors duration-300 hover:text-[#f9f9f9] focus:text-[#f9f9f9]`}
          >
            <AiOutlinePieChart />
          </button>
        </div>
      </div>

      {options[activeIndex].description && (
        <p className="mb-[20px] hidden text-[14px] tracking-tight text-[#686868] lg:block">
          {options[activeIndex].description}
        </p>
      )}
      <div className="max-h-[295px] overflow-x-scroll pr-[3px] md:max-h-[252px] lg:max-h-[313px]">
        <div className="relative h-max w-full overflow-hidden rounded-[12px] bg-[#262626] p-[16px] transition duration-[600ms] lg:px-[20px] lg:py-[20px]">
          {options.map((option: OptionsType, index: number) => {
            return (
              <div
                key={index}
                className={`relative h-full w-full transform transition duration-[800ms] ${
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
    </div>
  );
};
