import { AuthProvider } from './authContext/authContext';
import { FilterByAuthorTileProvider } from './filterByAuthorTile/filterByAuthorTile';
import { UserInformationProvider } from './userInformation/userInformation';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <UserInformationProvider>
        <FilterByAuthorTileProvider>{children}</FilterByAuthorTileProvider>
      </UserInformationProvider>
    </AuthProvider>
  );
};
