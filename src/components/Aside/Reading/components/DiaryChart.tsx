import { FC } from 'react';
import { format } from 'date-fns';
import { ReadingProgress } from '../../../../types/bookWithReadingProgress';

interface DiaryProps {
  progress: ReadingProgress[] | undefined;
}

export const DiaryChart: FC<DiaryProps> = ({ progress }) => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem
      cupiditate est quis commodi ipsum, facere sint eaque fuga ad quaerat fugit
      consequuntur possimus molestiae dolores doloribus, inventore ab quo.
    </p>
  );
};
