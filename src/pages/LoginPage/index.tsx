import LoginForm from "../../components/Forms/LoginForm";
import Logo from "../../components/Logo";
import { LoginPageStyle } from "./style";

const LoginPage = () => {
  return (
    <LoginPageStyle>
      <Logo />
      <LoginForm />
    </LoginPageStyle>
  );
};

export default LoginPage;
