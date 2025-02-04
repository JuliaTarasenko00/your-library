import { createContext } from 'react';
import { useAuth } from '../authContext/useAuth';
import { useQuery } from '@tanstack/react-query';
import { getCurrent } from '../../../api/auth';
import { Auth } from '../../../types/auth';
import { MainLoader } from '../../../components/ui/loader/MainLoader';

export type TUserInformationContext = {
  data: Auth | undefined;
};

export const UserInformationContext = createContext<
  TUserInformationContext | undefined
>(undefined);

export const UserInformationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { token } = useAuth();

  const { data, isLoading } = useQuery<Auth>({
    queryKey: ['get/userInformation'],
    queryFn: getCurrent,
    enabled: !!token,
    retry: false,
  });

  return (
    <>
      {isLoading ? (
        <MainLoader />
      ) : (
        <UserInformationContext.Provider value={{ data }}>
          {children}
        </UserInformationContext.Provider>
      )}
    </>
  );
};
