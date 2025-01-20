import { useMutation } from '@tanstack/react-query';
import { signin } from '../../api/auth';
import { SignIn } from '../../types/auth';

export const useFetchLogin = () => {
  const { mutate } = useMutation({
    mutationKey: ['fetch/signin'],
    mutationFn: (body: SignIn) => signin(body),
  });

  return { mutate };
};
