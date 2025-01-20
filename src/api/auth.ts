import { Auth, SignIn, SignUp } from '../types/auth';
import { $instants } from './request';

const path = '/users';

export const signup = async (body: SignUp) => {
  const { data } = await $instants.post<Auth>(`${path}/signup`, body);

  return data;
};

export const signin = async (body: SignIn) => {
  const { data } = await $instants.post<Auth>(`${path}/signin`, body);

  return data;
};

export const getCurrent = async () => {
  const { data } = await $instants.get(`${path}/current`);

  return data;
};
