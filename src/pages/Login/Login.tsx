import { AuthLayout } from '../../components/AuthLayout/AuthLayout';
import { AuthButton } from '../../components/ui/AuthButton';
import { AuthLink } from '../../components/ui/AuthLink';
import { routes } from '../../helpers/path';

export default function Login() {
  return (
    <AuthLayout>
      <div className="mt-[163px] flex items-center gap-[14px] md:gap-[20px]">
        <AuthButton>Login In</AuthButton>
        <AuthLink to={routes.register}>Don’t have an account? </AuthLink>
      </div>
    </AuthLayout>
  );
}
