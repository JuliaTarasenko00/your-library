import { Dispatch, FC, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../../ui/inputs/TextInput';
import { numberStyle, textStyle, wrapper } from './filterStyle';
import { FaArrowRightLong } from 'react-icons/fa6';
import book from '../../../assets/img/book.webp';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../helpers/path';
import { useFilterBook } from '../../../helpers/context/filterByAuthorTile/useFilterBook';
import { submitButton } from '../../ui/submitButtonStyle';

interface FilterProps {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export const Filters: FC<FilterProps> = ({ setCurrentPage, currentPage }) => {
  const { value, setValue } = useFilterBook();
  const navigate = useNavigate();

  const defaultValues = {
    title: value.title,
    author: value.author,
  };

  const {
    control,
    reset,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isSubmitted },
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'onChange',
  });

  const isValues = Object.values(getValues()).some((el) => el !== '');

  const onFirstPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(1);
      return;
    }
  };

  const onSubmitForm = (values: typeof defaultValues) => {
    onFirstPage();
    setValue({ title: values.title, author: values.author });
  };

  return (
    <>
      <div className="w-[100%]">
        <h2 className="mb-[8px] text-[10px] font-medium text-[#F9F9F9] md:text-[14px]">
          Filters:
        </h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="flex flex-col gap-[8px]">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorMessage={errors.title?.message}
                  label="Book title:"
                />
              )}
            />
            <Controller
              name="author"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorMessage={errors.title?.message}
                  label="The author:"
                />
              )}
            />
          </div>
          <div className="mt-[20px] flex items-center justify-between md:mt-[32px] lg:mt-[20px]">
            <button type="submit" className={submitButton} disabled={!isDirty}>
              To apply
            </button>
            {(isSubmitted || isValues) && (
              <button
                type="button"
                className={submitButton}
                onClick={() => {
                  reset({ title: '', author: '' });
                  setValue({ title: '', author: '' });
                  onFirstPage();
                }}
              >
                To clear
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="rounded-[12px] bg-[#262626] p-[20px]">
        <h3 className="mb-[40px] text-[18px] font-bold text-[#F9F9F9] md:text-[20px]">
          Start your workout
        </h3>
        <div className="flex flex-col gap-[20px]">
          <div className={wrapper}>
            <p className={numberStyle}>
              <span>1</span>
            </p>
            <p className={textStyle}>
              <span className="text-[#F9F9F9]">Create a personal library:</span>{' '}
              add the books you intend to read to it.
            </p>
          </div>
          <div className={wrapper}>
            <p className={numberStyle}>
              <span>2</span>
            </p>
            <p className={textStyle}>
              <span className="text-[#F9F9F9]">Create your first workout:</span>{' '}
              define a goal, choose a period, start training.
            </p>
          </div>
        </div>
        <div className="mt-[20px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(routes.library)}
            className="text-[14px] leading-[18px] text-[#686868] underline"
          >
            My library
          </button>
          <button type="button" onClick={() => navigate(routes.library)}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="hidden items-center gap-[14px] rounded-[12px] bg-[#262626] px-[20px] py-[15px] lg:flex">
        <img src={book} alt="book" />
        <p className="text-balance text-[14px] leading-[18px] text-[#686868]">
          "Books are <span className="text-[#F9F9F9]">windows</span> to the
          world, and reading is a journey into the unknown."
        </p>
      </div>
    </>
  );
};
