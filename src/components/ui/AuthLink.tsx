import { Link } from 'react-router-dom';

export const AuthLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <Link
      to={to}
      className="text-[14px] font-normal tracking-tight text-[#686868] underline md:text-[18px]"
    >
      {children}
    </Link>
  );
};
