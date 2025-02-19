import img from '../../assets/img/not_found_book.webp';

export const NotValidId = () => {
  return (
    <div className="mg:mt-[40px] mt-[32px] flex flex-col items-center justify-center lg:mt-[44px]">
      <img
        src={img}
        alt="Not Found Book"
        loading="lazy"
        width={137}
        height={208}
        className="mb-[10px] h-[208px] w-[137px] rounded-[8px] object-cover md:h-[256px] md:w-[169px] lg:h-[340px] lg:w-[224px]"
      />
      <div className="flex flex-col items-center justify-center gap-[16px] md:gap-[20px]">
        <p className="text-balance text-center text-[14px] font-bold leading-[18px] tracking-[-0.02em] text-[#F9F9F9] md:max-w-max md:text-[20px] md:leading-[20px]">
          Oh no, it looks like this book has slipped through the pages of
          time...
        </p>
        <p className="mt-[5px] text-balance text-center text-[10px] leading-[12px] tracking-[-0.02em] text-[#686868] md:text-[14px] md:leading-[18px]">
          Maybe it wandered off into a parallel universe or got lost behind a
          coffee stain on an old manuscript.
        </p>
        <p className="text-balance text-center text-[10px] leading-[12px] tracking-[-0.02em] text-[#686868] md:text-[14px] md:leading-[18px]">
          Try searching again or double-check the title— and if this is a
          literary unicorn, let us know, and we’ll go on a quest to find it!
        </p>
      </div>
    </div>
  );
};
