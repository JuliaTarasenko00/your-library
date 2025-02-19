import img from '../../../assets/img/star.webp';

export const EmptyProgress = () => {
  return (
    <div className="mt-[40px] h-[100%] md:mt-[0] lg:mt-[40px]">
      <h3 className="text-[18px] font-bold text-[#F9F9F9] md:text-[20px]">
        Progress
      </h3>
      <p className="mb:mb-[60px] mb-[20px] mt-[14px] w-full text-[14px] leading-[16px] tracking-tighter text-[#686868]">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className="mx-auto flex h-[80px] w-[80px] items-center justify-center rounded-[50px] bg-[#262626] md:h-[100px] md:w-[100px]">
        <img
          src={img}
          alt="star"
          className="h-[32px] w-[32px] md:h-[50px] md:w-[50px]"
        />
      </div>
    </div>
  );
};
