import book from '../../assets/img/bigBook.webp';
import { useFilterBook } from '../../helpers/context/filterByAuthorTile/useFilterBook';

export const NotFoundBook = () => {
  const { value } = useFilterBook();
  console.log('value: ', value.author);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-[20px] lg:justify-center">
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[65px] bg-[#262626] md:h-[130px] md:w-[130px]">
        <img
          src={book}
          alt="book"
          width={70}
          height={70}
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
        />
      </div>
      <p className="max-w-[474px] text-center text-[14px] font-normal leading-[18px] text-[#F9F9F9]">
        Oops! It looks like this book
        {!!value.title ? (
          <span className="text-[#686868]"> {value.title} </span>
        ) : (
          ''
        )}
        {!!value.author ? (
          <>
            <span>the author of which</span>
            <span className="text-[#686868]"> {value.author} </span>
          </>
        ) : (
          ''
        )}
        is hiding between the pages of other stories!
      </p>
      <p className="max-w-[474px] text-center text-[14px] font-normal leading-[18px] text-[#F9F9F9]">
        Maybe try searching again or discover something new for inspiration?
      </p>
    </div>
  );
};
