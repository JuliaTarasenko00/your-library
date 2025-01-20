import { useContext } from 'react';
import {
  TUserInformationContext,
  UserInformationContext,
} from './userInformation';

export const useUserInformation = (): TUserInformationContext => {
  const context = useContext(UserInformationContext);

  if (!context) {
    throw new Error(
      'UserInformationContext must be used within a AuthProvider',
    );
  }
  return context;
};
