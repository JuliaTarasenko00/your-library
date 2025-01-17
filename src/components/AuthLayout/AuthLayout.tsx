import img from '../../assets/img/iPhone15.webp';
import logo from '../../assets/img/logo.png';

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="container grid grid-rows-[2fr_1.5fr] justify-center gap-[10px] py-[32px] md:grid-rows-none md:justify-normal xl:h-[100%] xl:grid-cols-2 xl:gap-[16px]">
      <div className="w-full rounded-[30px] bg-[#1F1F1F] p-[20px] md:p-[64px]">
        <div className="flex items-center gap-[4px]">
          <img src={logo} alt="logo" />
          <h2 className="hidden text-[18px] font-medium uppercase leading-[18px] text-[#F9F9F9] md:block">
            read journey
          </h2>
        </div>
        <h3 className="mb-[20px] mt-[40px] max-w-[340px] text-[32px] font-bold leading-[32px] text-[#F9F9F9] md:mb-[40px] md:mt-[157px] md:max-w-full md:text-[64px] md:leading-[60px] xl:mt-[107px]">
          Expand your mind, reading
          <span className="text-[#E3E3E380]"> a book</span>
        </h3>
        <div>{children}</div>
      </div>
      <div className="relative block w-full overflow-hidden rounded-[30px] bg-[#1F1F1F] md:hidden xl:block">
        <img
          src={img}
          alt="phone"
          width={366}
          className="absolute bottom-[-10%] left-[50%] h-[100%] w-[235px] translate-x-[-50%] xl:bottom-0 xl:h-[75%] xl:w-[366px]"
        />
      </div>
    </section>
  );
};
