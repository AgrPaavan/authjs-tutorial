import { RegisterForm } from "@/components/auth/register-form";

type Props = {
  children: React.ReactNode;
};

const Register = ({ children }: Props) => {
  return <RegisterForm />;
};
export default Register;
