import { LoginForm } from "@/components/auth/login-form";

type Props = {
  children: React.ReactNode;
};

const Login = ({ children }: Props) => {
  return <LoginForm />;
};
export default Login;
