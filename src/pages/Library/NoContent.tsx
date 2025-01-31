import book from '../../assets/img/bigBook.webp';

export const NoContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[20px]">
      <div className="flex h-[100px] w-[100px] items-center justify-center rounded-[65px] bg-[#262626] md:h-[130px] md:w-[130px]">
        <img
          src={book}
          alt="book"
          width={70}
          height={70}
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
        />
      </div>
      <p className="max-w-[274px] text-center text-[14px] font-normal leading-[18px] text-[#F9F9F9]">
        To start training, add{' '}
        <span className="text-[#686868]">some of your books</span> or from the
        recommended ones
      </p>
    </div>
  );
};
