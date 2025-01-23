import {
  FC,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ErrorTitle } from './ErrorTitle';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label: string;
}

export const TextInput: FC<TextInputProps> = forwardRef(
  ({ errorMessage, label, ...rest }, _ref: ForwardedRef<HTMLInputElement>) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = useState<number>(0);

    useEffect(() => {
      if (labelRef.current) {
        setLabelWidth(labelRef.current.offsetWidth + 22);
      }
    }, [label]);

    return (
      <div className="relative w-full">
        <div className="relative">
          <label
            ref={labelRef}
            className="absolute left-[14px] top-[50%] translate-y-[-50%] text-[12px] text-[#686868] md:text-[14px]"
          >
            {label}
          </label>
          <input
            type="text"
            {...rest}
            ref={_ref}
            className={`w-full rounded-[12px] border-[1px] bg-[#262626] py-[16px] pr-[14px] text-[12px] text-[#F9F9F9] md:text-[14px] ${errorMessage ? 'border-[#E90516]' : 'border-transparent hover:border-[#F9F9F91A] focus:border-[#F9F9F91A]'} outline-none transition duration-300`}
            style={{ paddingLeft: `${labelWidth}px` }}
          />
        </div>
        {errorMessage && <ErrorTitle>{errorMessage}</ErrorTitle>}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
