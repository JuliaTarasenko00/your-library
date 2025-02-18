import { FC, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { ErrorTitle } from './ErrorTitle';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const EmailInput: FC<EmailInputProps> = forwardRef(
  ({ errorMessage, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="relative w-full">
        <div className="relative">
          <label className="absolute left-[14px] top-[50%] translate-y-[-50%] text-[12px] text-[#686868] md:text-[14px]">
            Mail:
          </label>
          <input
            type="email"
            {...rest}
            ref={_ref}
            className={`pr-[14px]text-[#F9F9F9] w-full rounded-[12px] border-[1px] bg-[#262626] py-[16px] pl-[53px] ${errorMessage ? 'border-[#E90516]' : 'border-transparent hover:border-[#F9F9F91A] focus:border-[#F9F9F91A]'} outline-none transition duration-300`}
          />
        </div>
        {errorMessage && <ErrorTitle>{errorMessage}</ErrorTitle>}
      </div>
    );
  },
);

EmailInput.displayName = 'EmailInput';
