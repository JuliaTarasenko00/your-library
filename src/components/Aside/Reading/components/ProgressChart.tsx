import { FC } from 'react';
import { ReadingProgress } from '../../../../types/bookWithReadingProgress';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ProgressChartProps {
  totalPage: number;
  progress: ReadingProgress[];
}

const activeColor = '#30B94D';

export const ProgressChart: FC<ProgressChartProps> = ({
  totalPage,
  progress,
}) => {
  const readPages = progress?.length
    ? (progress[progress.length - 1]?.finishPage ??
      progress[progress.length - 2]?.finishPage ??
      0)
    : 0;

  const percentage = (readPages / totalPage) * 100;
  const fixedPercentage = Number(percentage.toFixed(2));

  const data = {
    datasets: [
      {
        data: [fixedPercentage, 100 - fixedPercentage],
        backgroundColor: [activeColor, '#1e1e1e'],
        borderWidth: [0, 2],
        borderColor: ['transparent', '#1e1e1e'],
        borderRadius: [2, 0],
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <>
      <div className="relative h-[168px] w-[168px] place-self-center">
        <Doughnut data={data} options={options} />
        <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px] font-bold text-[#F9F9F9]">
          100%
        </p>
      </div>
      <div className="mt-[20px] flex items-start justify-center gap-[10px]">
        <span
          className="block h-[14px] w-[14px] rounded-[4px]"
          style={{ background: activeColor }}
        ></span>{' '}
        <div className="flex flex-col items-start gap-[3px]">
          <p className="text-[20px] leading-[20px] tracking-tighter text-[#F9F9F9]">
            {fixedPercentage}%
          </p>
          <p className="text-[12px] leading-[14px] text-[#686868]">
            {' '}
            {readPages} pages read
          </p>{' '}
        </div>
      </div>
    </>
  );
};
