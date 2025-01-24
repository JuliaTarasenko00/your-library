import { createContext, useEffect } from 'react';
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
  const { token, setToken } = useAuth();

  const { data, error, isLoading } = useQuery<Auth>({
    queryKey: ['get/userInformation'],
    queryFn: getCurrent,
    enabled: !!token,
  });

  useEffect(() => {
    if ((error as any)?.response?.status === 401) {
      setToken('');
    }
  }, [error, setToken]);

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
