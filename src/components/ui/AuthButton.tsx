export const AuthButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      className="rounded-[30px] bg-[#F9F9F9] px-[25px] py-[16px] text-[12px] font-bold leading-[20px] text-[#1F1F1F] md:px-[54px] md:text-[20px]"
    >
      {children}
    </button>
  );
};
