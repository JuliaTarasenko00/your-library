import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../../ui/inputs/TextInput';
import { submitButton } from '../../ui/submitButtonStyle';
import { Book } from '../../../types/bookWithReadingProgress';
import { EmptyProgress } from './EmptyProgress';
import { ToggleComponent } from './components/ToggleComponent';

interface ReadingAsideProps {
  book: Book | null;
  bookId: string;
  isActive: boolean;
  handleStartReading: (id: string, page: number) => void;
  handleSubmitForm: ({ page }: { page: number }) => void;
  pendingStartReading: boolean;
  pendingFinishReading: boolean;
  isPending: boolean;
}

export const ReadingAside: FC<ReadingAsideProps> = ({
  book,
  bookId,
  isActive,
  handleStartReading,
  handleSubmitForm,
  pendingStartReading,
  pendingFinishReading,
  isPending,
}) => {
  const bookProgress = book?.progress;
  const page =
    (bookProgress && bookProgress[bookProgress?.length - 1]?.finishPage) ||
    (bookProgress && bookProgress[bookProgress?.length - 1]?.startPage);

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

  return (
    <>
      <div>
        <h3 className="mb-[8px]">
          {!isActive ? 'Start page:' : 'Finish page:'}
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
          {isActive && (
            <button
              type="submit"
              disabled={!isDirty || pendingFinishReading}
              className={submitButton}
            >
              To Stop
            </button>
          )}
          {!isActive && (
            <button
              type="button"
              disabled={pendingStartReading}
              onClick={() => handleStartReading(bookId, page as number)}
              className={submitButton}
            >
              To Start
            </button>
          )}
        </form>
      </div>

      {!bookProgress?.length && !isPending && <EmptyProgress />}

      {!!bookProgress?.length && <ToggleComponent book={book} />}
    </>
  );
};
