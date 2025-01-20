import { FC, ReactNode } from 'react';
import { useAuth } from '../../helpers/context/authContext/useAuth';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
  redirectTo: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  children,
  redirectTo = '/login',
}) => {
  const { token } = useAuth();

  return token ? children : <Navigate to={redirectTo} />;
};
