import { AuthProvider } from './authContext/authContext';
import { UserInformationProvider } from './userInformation/userInformation';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <UserInformationProvider>{children}</UserInformationProvider>
    </AuthProvider>
  );
};
