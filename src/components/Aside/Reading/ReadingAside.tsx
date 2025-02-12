import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../../ui/inputs/TextInput';
import { useReadingControl } from '../../../helpers/context/readingPageProgress/useReadingControl';
import { submitButton } from '../../ui/submitButtonStyle';
import { ReadingProgress } from '../../../types/bookWithReadingProgress';
import { EmptyProgress } from './EmptyProgress';

interface ReadingAsideProps {
  bookProgress: ReadingProgress[] | undefined;
  bookId: string;
}

export const ReadingAside: FC<ReadingAsideProps> = ({
  bookProgress,
  bookId,
}) => {
  const {
    isReading,
    setIsReading,
    setBookId,
    bookId: id,
  } = useReadingControl();
  const page =
    bookProgress && bookProgress[bookProgress?.length - 1]?.finishPage;
  console.log('bookProgress: ', bookProgress);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      page: page ?? 0,
    },
  });

  useEffect(() => {
    if (page !== undefined) {
      reset({ page });
    }
  }, [page, reset]);

  useEffect(() => {
    if (bookId !== id) {
      setIsReading(false);
    }
  }, [bookId, id]);

  const handleSubmitForm = (value: any) => {
    console.log('value: ', value);
    setIsReading(false);
  };

  return (
    <>
      <div>
        <h3 className="mb-[8px]">
          {!isReading ? 'Start page:' : 'Finish page:'}
        </h3>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex w-[100%] flex-col items-start gap-[20px]"
        >
          <Controller
            name="page"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                label="Page number:"
                errorMessage={errors.page?.message}
              />
            )}
          />
          {isReading && (
            <button type="submit" disabled={!isDirty} className={submitButton}>
              To Stop
            </button>
          )}
          {!isReading && (
            <button
              type="button"
              className={submitButton}
              onClick={() => {
                setIsReading(true), setBookId(bookId);
              }}
            >
              To Start
            </button>
          )}
        </form>
      </div>

      <div className="mt-[40px] h-[100%]">
        <h3 className="text-[20px] font-bold text-[#F9F9F9]">Progress</h3>
        {!bookProgress?.length && <EmptyProgress />}
      </div>
    </>
  );
};
