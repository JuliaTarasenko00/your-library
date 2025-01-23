import { signup } from '../../api/auth';
import { SignUp } from '../../types/auth';
import { useMutation } from '@tanstack/react-query';

export const useFetchAuthUser = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['fetch/signup'],
    mutationFn: (body: SignUp) => signup(body),
  });

  return { isPending, mutate };
};
