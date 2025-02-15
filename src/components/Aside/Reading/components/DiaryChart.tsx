import { FC } from 'react';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from 'date-fns';
import { ReadingProgress } from '../../../../types/bookWithReadingProgress';
import './stylewebkit.css';
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
  totalPage: number;
}

type SorterType = {
  [key: string]: ReadingProgress[];
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const DiaryChart: FC<DiaryProps> = ({ progress, totalPage }) => {
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
        .map(([date, el]) => (
          <div
            key={date}
            className="wrapper_diary relative border-l-[2.5px] border-l-[#1F1F1F]"
          >
            <p className="relative left-[-10px] mb-[28px] flex items-center gap-[10px] text-[16px] font-bold leading-[18px]">
              <span className="block h-[20px] w-[20px] rounded-[2px] border-[5px] border-[#F9F9F9] bg-[#141414]"></span>{' '}
              {date}
            </p>
            <ul className="ml-[15px] flex flex-col gap-[35px] pb-[28px]">
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
                      <p className="mb-[8px] text-[20px] leading-[18px] text-[#F9F9F9]">
                        {percentage}%
                      </p>
                      <p className="text-[14px] text-[#686868]">
                        {spentTimeToRead}
                      </p>
                    </div>
                    <div className="h-[54px] w-[59px]">
                      <Line options={options} data={data} />
                      <p className="text-[8px] text-[#686868]">
                        {totalPageAtTime} pages
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
    </>
  );
};
