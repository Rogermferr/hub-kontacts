import RegisterForm from "../../components/Forms/RegisterForm";
import Logo from "../../components/Logo";
import { RegisterPageStyle } from "./style";
import { motion } from "framer-motion";

const RegisterPage = () => {
  return (
    <RegisterPageStyle>
      <motion.section
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}>
        <Logo />
      </motion.section>
      <RegisterForm />
    </RegisterPageStyle>
  );
};

export default RegisterPage;
