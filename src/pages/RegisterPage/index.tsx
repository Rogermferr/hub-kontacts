import RegisterForm from "../../components/Forms/RegisterForm";
import Logo from "../../components/Logo";
import { RegisterPageStyle } from "./style";

const RegisterPage = () => {
  return (
    <RegisterPageStyle>
      <Logo />
      <RegisterForm />
    </RegisterPageStyle>
  );
};

export default RegisterPage;
