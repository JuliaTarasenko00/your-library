import { Link } from 'react-router-dom';
import { routes } from '../../helpers/path';
import img from '../../assets/img/not_found_page.webp';

export default function NotFoundPage() {
  return (
    <section className="container-custom">
      <div className="flex flex-col items-center justify-around gap-[20px] p-6 text-center md:flex-row">
        <div className="overflow-hidden rounded-[35px]">
          <img src={img} alt="library" width={500} height={500} />
        </div>

        <div>
          <h1 className="mb-4 animate-bounce text-7xl font-extrabold italic text-[#F9F9F9]">
            404
          </h1>
          <h2 className="mb-2 animate-pulse text-2xl font-semibold italic text-[#767373]">
            Whoops! Lost Page
          </h2>
          <p className="mb-9 max-w-lg text-balance text-center text-xs text-[#696868] lg:text-sm">
            It seems that this page is lost among the bookshelves. Perhaps she
            hidden between the pages of your favorite book?
          </p>
          <div className="transition-transform duration-500 hover:scale-105">
            <Link
              to={routes.main}
              className="transition-custom rounded-[30px] border border-[#F9F9F933] px-[24px] py-[12px] text-[14px] font-bold leading-[18px] text-[#F9F9F9] hover:border-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#1F1F1F] focus:border-[#F9F9F9] focus:bg-[#F9F9F9] focus:text-[#1F1F1F] md:px-[28px] md:py-[14px] md:text-[16px]"
            >
              Return to Library
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
