import { useEffect, useState } from 'react';

export const useToggleModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onToggleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return { open, onToggleModal };
};
