import { AuthProvider } from './authContext/authContext';
import { FilterByAuthorTileProvider } from './filterByAuthorTile/filterByAuthorTile';
import { ReadingPageProgressProvider } from './readingPageProgress/ReadingPageProgress';
import { UserInformationProvider } from './userInformation/userInformation';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <UserInformationProvider>
        <FilterByAuthorTileProvider>
          <ReadingPageProgressProvider>{children}</ReadingPageProgressProvider>
        </FilterByAuthorTileProvider>
      </UserInformationProvider>
    </AuthProvider>
  );
};
