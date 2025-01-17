import {
  FC,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import { GoEyeClosed } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { ErrorTitle } from './ErrorTitle';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export const PasswordInput: FC<PasswordInputProps> = forwardRef(
  ({ errorMessage, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    const [isPassword, setIsPassword] = useState<boolean>(true);

    return (
      <div className="w-full">
        <div className="relative">
          <label className="absolute left-[14px] top-[50%] translate-y-[-50%] text-[12px] text-[#686868] md:text-[14px]">
            Password:
          </label>
          <input
            {...rest}
            type={isPassword ? 'password' : 'text'}
            className={`w-full rounded-[12px] border-[1px] bg-[#262626] py-[16px] pl-[86px] pr-[14px] text-[12px] text-[#F9F9F9] md:text-[14px] ${errorMessage ? 'border-[#E90516]' : 'border-transparent hover:border-[#F9F9F91A] focus:border-[#F9F9F91A]'} outline-none transition duration-300`}
          />
          <button
            type="button"
            onClick={() => setIsPassword(!isPassword)}
            className="absolute right-[14px] top-[50%] translate-y-[-50%]"
          >
            {isPassword ? (
              <GoEyeClosed
                className={`${errorMessage ? 'text-[#e90516]' : 'text-[#f9f9f9]'}`}
              />
            ) : (
              <IoEyeOutline
                className={`${errorMessage ? 'text-[#e90516]' : 'text-[#f9f9f9]'}`}
              />
            )}
          </button>
        </div>
        {errorMessage && <ErrorTitle>{errorMessage}</ErrorTitle>}
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
