import { Controller, useForm } from 'react-hook-form';
import { AuthLayout } from '../../components/AuthLayout/AuthLayout';
import { AuthButton } from '../../components/ui/AuthButton';
import { AuthLink } from '../../components/ui/AuthLink';
import { routes } from '../../helpers/path';
import { EmailInput } from '../../components/ui/inputs/EmailInput';
import { PasswordInput } from '../../components/ui/inputs/PasswordInput';
import { ValidateLoginType, validateSchemaLogin } from './validateSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const defaultValues: ValidateLoginType = {
  email: '',
  password: '',
};

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidateLoginType>({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(validateSchemaLogin),
  });

  const submitForm = (values: ValidateLoginType) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col items-start justify-between"
      >
        <div className="flex w-full flex-col items-center justify-center gap-[14px]">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <EmailInput {...field} errorMessage={errors.email?.message} />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </div>
        <div className="mt-[72px] flex items-center gap-[14px] md:mt-[146px] md:gap-[20px]">
          <AuthButton>Login In</AuthButton>
          <AuthLink to={routes.register}>Don’t have an account? </AuthLink>
        </div>
      </form>
    </AuthLayout>
  );
}
