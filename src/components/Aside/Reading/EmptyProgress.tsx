import img from '../../../assets/img/star.webp';

export const EmptyProgress = () => {
  return (
    <div className="mt-[40px] h-[100%]">
      <h3 className="text-[20px] font-bold text-[#F9F9F9]">Progress</h3>
      <p className="mb-[60px] mt-[14px] w-full text-[14px] leading-[16px] tracking-tighter text-[#686868]">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className="flex h-[100px] w-[100px] items-center justify-center place-self-center rounded-[50px] bg-[#262626]">
        <img src={img} alt="star" className="h-[50px] w-[50px]" />
      </div>
    </div>
  );
};
