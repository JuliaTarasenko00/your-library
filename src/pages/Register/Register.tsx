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
import { useFetchAuthUser } from './useFetchAuthUser';
import { useAuth } from '../../helpers/context/authContext/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultValues: TypeValidateRegister = {
  name: '',
  email: '',
  password: '',
};

export default function Register() {
  const navigate = useNavigate();
  const { mutate } = useFetchAuthUser();
  const { token, setToken } = useAuth();

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
    mutate(values, {
      onSuccess: (data) => {
        setToken(data.token);
      },
      onError: (error) => {
        console.error('Error signing up', error);
      },
    });
  };

  useEffect(() => {
    token && navigate(routes.main);
  }, [token]);

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col items-start justify-between"
      >
        <div className="flex w-full flex-col items-center justify-center gap-[14px]">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorMessage={errors.name?.message}
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
