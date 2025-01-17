import { Controller, useForm } from 'react-hook-form';
import { AuthLayout } from '../../components/AuthLayout/AuthLayout';
import { AuthButton } from '../../components/ui/AuthButton';
import { AuthLink } from '../../components/ui/AuthLink';
import { routes } from '../../helpers/path';
import { TypeValidateRegister, validateRegisterSchema } from './validateSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailInput } from '../../components/ui/inputs/EmailInput';
import { PasswordInput } from '../../components/ui/inputs/PasswordInput';
import { TextInput } from '../../components/ui/inputs/TextInput';

const defaultValues: TypeValidateRegister = {
  login: '',
  email: '',
  password: '',
};

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeValidateRegister>({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(validateRegisterSchema),
  });

  const onSubmitForm = (values: TypeValidateRegister) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col items-start justify-between"
      >
        <div className="flex w-full flex-col items-center justify-center gap-[14px]">
          <Controller
            name="login"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorMessage={errors.login?.message}
                label={'Name:'}
              />
            )}
          />
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
        </div>{' '}
        <div className="mt-[82px] flex items-center gap-[14px] md:gap-[20px]">
          <AuthButton>Registration</AuthButton>
          <AuthLink to={routes.login}>Already have an account?</AuthLink>{' '}
        </div>
      </form>
    </AuthLayout>
  );
}
