import { FC } from 'react';
import { PiTrashLight } from 'react-icons/pi';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from 'date-fns';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { ReadingProgress } from '../../../../types/bookWithReadingProgress';
import './stylewebkit.css';
import { diaryOptions } from './options';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

interface DiaryProps {
  progress: ReadingProgress[] | undefined;
  handleDeleteReadingTime: (readingId: string) => void;
  totalPage: number;
}

type SorterType = {
  [key: string]: ReadingProgress[];
};

export const DiaryChart: FC<DiaryProps> = ({
  progress,
  totalPage,
  handleDeleteReadingTime,
}) => {
  const sortedGroup: SorterType =
    progress?.reduce((acc: SorterType, arr) => {
      if (!arr.finishReading) return acc;

      const formattedDate = format(arr.finishReading, 'dd.MM.yyyy');

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }
      acc[formattedDate].push(arr);
      return acc;
    }, {} as SorterType) || {};

  return (
    <>
      {Object.entries(sortedGroup)
        .reverse()
        .map(([date, el]) => {
          const totalPages = el.reduce((acc, { startPage, finishPage }) => {
            return acc + (finishPage - startPage);
          }, 0);

          return (
            <div
              key={date}
              className="wrapper_diary relative border-l-[2.5px] border-l-[#1F1F1F]"
            >
              <div className="diary_date_wrapper mb-[16px] flex items-center justify-between md:mb-[28px]">
                <p className="diary_date relative left-[-10px] flex items-center gap-[10px] text-[12px] font-bold leading-[18px] md:text-[16px]">
                  <span className="block h-[16px] w-[16px] rounded-[2px] border-[4px] border-[#F9F9F9] bg-[#141414] md:h-[20px] md:w-[20px] md:border-[5px]"></span>{' '}
                  {date}
                </p>
                <p className="text-[12px] text-[#686868] md:text-[14px]">
                  {totalPages === 1
                    ? `${totalPages} page`
                    : `${totalPages} pages`}
                </p>
              </div>
              <ul className="ml-[15px] flex flex-col gap-[26px] pb-[26px] md:gap-[35px] md:pb-[28px]">
                {el.reverse().map((obj: ReadingProgress) => {
                  const totalPageAtTime = obj.finishPage - obj.startPage;
                  const percentage = (
                    (totalPageAtTime / totalPage) *
                    100
                  ).toFixed(2);

                  const start = new Date(obj.startReading);
                  const end = new Date(obj.finishReading);

                  const hours = differenceInHours(end, start) % 24;
                  const minutes = differenceInMinutes(end, start) % 60;
                  const seconds = differenceInSeconds(end, start) % 60;
                  const spentTimeToRead = ` ${!!hours ? `${hours} hours and` : ''} ${!!minutes ? `${!!minutes ? `${minutes} minutes` : ''}` : ''} ${!hours && !minutes && !!seconds ? `${!!seconds ? `${seconds} seconds` : ''}` : ''}`;

                  const data = {
                    labels: ['a', 'b'],
                    datasets: [
                      {
                        fill: true,
                        data: [obj?.startPage, obj?.finishPage],
                        borderColor: '#30B94D',
                        backgroundColor: '#30B94D33',
                        pointRadius: 0,
                        pointHoverRadius: 0,
                      },
                    ],
                  };

                  return (
                    <li
                      key={obj._id}
                      className="flex items-start justify-between"
                    >
                      <div>
                        <p className="mb-[8px] text-[14px] leading-[18px] text-[#F9F9F9] md:text-[20px]">
                          {percentage}%
                        </p>
                        <p className="text-[10px] text-[#686868] md:text-[14px]">
                          {spentTimeToRead}
                        </p>
                      </div>
                      <div className="flex items-center gap-[6px] md:gap-[8px]">
                        <div className="h-[24px] w-[49px] md:h-[54px] md:w-[59px]">
                          <Line options={diaryOptions} data={data} />
                          <p className="text-center text-[10px] text-[#686868] md:text-[12px]">
                            {totalPageAtTime === 1
                              ? `${totalPageAtTime} page`
                              : `${totalPageAtTime} pages`}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteReadingTime(obj._id)}
                          className="h-[18px] w-[18px] text-[#686868] transition-colors duration-300 hover:text-[#F9F9F9] focus:text-[#F9F9F9]"
                        >
                          <PiTrashLight />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </>
  );
};
