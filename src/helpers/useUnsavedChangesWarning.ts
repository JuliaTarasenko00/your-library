import { useEffect } from 'react';

export const useUnsavedChangesWarning = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};
