import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRecommendBooks } from '../../../pages/Home/useRecommendBooks';
import { routes } from '../../../helpers/path';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../../ui/inputs/TextInput';
import { useAddBookToLibrary } from './useAddBookToLibrary';
import { toast } from 'sonner';
import { toastErrorStyle, toastSuccessStyle } from '../../ui/toastStyle';
import { useQueryClient } from '@tanstack/react-query';
import { submitButton } from '../../ui/submitButtonStyle';

const defaultValues = {
  title: '',
  author: '',
  totalPages: 0,
};

export const CreateLibrary = () => {
  const queryClient = useQueryClient();

  const { data } = useRecommendBooks(2, 3);
  const { mutate, isPending } = useAddBookToLibrary();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onSubmit',
  });

  const submitForm = async (values: typeof defaultValues) => {
    mutate(
      { ...values, totalPages: Number(values.totalPages) },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: ['fetch/get_library'],
          });
          toast.success(`Your book is now in the library!`, {
            style: toastSuccessStyle,
          });
        },
        onError: (error: Error) => {
          toast.error(error.message, { style: toastErrorStyle });
        },
      },
    );
  };

  return (
    <>
      <div className="w-full">
        <h2 className="mb-[8px] text-[10px] font-medium text-[#F9F9F9] md:text-[14px]">
          Create your library:
        </h2>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-[20px] flex flex-col items-center justify-center gap-[8px]">
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
                  errorMessage={errors.author?.message}
                  label="The author:"
                />
              )}
            />{' '}
            <Controller
              name="totalPages"
              control={control}
              render={({ field }) => (
                <TextInput
                  {...field}
                  errorMessage={errors.totalPages?.message}
                  label="Number of pages:"
                />
              )}
            />
          </div>
          <button type="submit" className={submitButton} disabled={isPending}>
            To apply
          </button>
        </form>
      </div>

      <div className="mt-[20px] rounded-[12px] bg-[#262626] p-[12px] xs:p-[20px] md:mt-0 lg:mt-[78px]">
        <h3 className="mb-[20px] text-[18px] font-medium leading-[20px] text-[#E3E3E3]">
          Recommended books
        </h3>
        <ul className="flex justify-center gap-[5px] xs:gap-[20px]">
          {data?.results.map(({ _id, imageUrl, title, author }) => {
            const newTitle = `${title.slice(0, 5)}${title.length >= 5 ? '...' : ''}`;
            return (
              <li key={_id} className="flex w-[71px] flex-col">
                <img
                  src={imageUrl}
                  alt={title}
                  width={71}
                  height={107}
                  className="h-[107px] w-[71px] rounded-[8px]"
                />
                <div className="mt-[8px] flex-grow-[1]">
                  <h4 className="text-[10px] font-bold leading-[12px] text-[#E3E3E3]">
                    {newTitle}
                  </h4>
                  <p className="text-[10px] font-normal leading-[12px] text-[#686868]">
                    {author}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-[20px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(routes.main)}
            className="text-[14px] leading-[18px] text-[#686868] underline"
          >
            Home
          </button>
          <button type="button" onClick={() => navigate(routes.main)}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </>
  );
};
