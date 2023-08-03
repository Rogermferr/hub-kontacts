import { zodResolver } from "@hookform/resolvers/zod";
import { IRegisterUser } from "../../../providers/UserContext/@types";
import Input from "../../Input";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../hooks/useUserContext";
import { registerSchema } from "./validations";
import { Link } from "react-router-dom";
import { RegisterFormStyle } from "./style";
import InputPass from "../../Input/InputPass";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const { userRegister } = useUserContext();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <RegisterFormStyle onSubmit={handleSubmit(userRegister)}>
        <Input
          id="fullName"
          label="Nome Completo"
          errors={errors.fullName?.message}
          placeholder="Digite seu nome completo aqui"
          {...register("fullName")}
        />

        <Input
          id="email"
          label="Email"
          errors={errors.email?.message}
          placeholder="Digite seu email aqui"
          {...register("email")}
        />

        <InputPass
          id="password"
          label="Senha"
          errors={errors.password?.message}
          placeholder="Digite sua senha aqui"
          {...register("password")}
        />

        <InputPass
          id="passwordConfirmation"
          label="Confirmação de senha"
          errors={errors.passwordConfirmation?.message}
          placeholder="Digite a senha novamente"
          {...register("passwordConfirmation")}
        />

        <Input
          id="telephone"
          label="Telefone"
          type="number"
          errors={errors.telephone?.message}
          placeholder="Digite o DDD e numero de telefone"
          {...register("telephone")}
        />

        <button type="submit">Cadastrar</button>

        <span>Já possui cadastro?</span>

        <Link to={"/"}>Vá para o login</Link>
      </RegisterFormStyle>
    </motion.section>
  );
};

export default RegisterForm;
