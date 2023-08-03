import LoginForm from "../../components/Forms/LoginForm";
import Logo from "../../components/Logo";
import { LoginPageStyle } from "./style";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <LoginPageStyle>
      <motion.section
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <Logo />
      </motion.section>
      <LoginForm />
    </LoginPageStyle>
  );
};

export default LoginPage;
