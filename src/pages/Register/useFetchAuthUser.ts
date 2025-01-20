import { signup } from '../../api/auth';
import { SignUp } from '../../types/auth';
import { useMutation } from '@tanstack/react-query';

export const useFetchAuthUser = () => {
  const { data, mutate } = useMutation({
    mutationKey: ['fetch/signup'],
    mutationFn: (body: SignUp) => signup(body),
  });

  return { data, mutate };
};
