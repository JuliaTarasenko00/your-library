import { logout } from '../../../api/auth';
import { useAuth } from '../../../helpers/context/authContext/useAuth';

export const LogOutButton = () => {
  const { setToken, setRefreshToken } = useAuth();

  const onSignOut = async () => {
    try {
      await logout();
      setToken('');
      setRefreshToken('');
      return;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      className="transition-custom rounded-[30px] border-[1px] border-[#F9F9F933] px-[20px] py-[10px] text-[14px] font-bold text-[#F9F9F9] hover:border-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#1F1F1F] focus:border-[#F9F9F9] focus:bg-[#F9F9F9] focus:text-[#1F1F1F] md:px-[28px] md:py-[12px] md:text-[16px]"
      onClick={onSignOut}
    >
      Log out
    </button>
  );
};
