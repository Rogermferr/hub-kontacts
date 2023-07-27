import Input from "../../Input";
import { IRegisterUser } from "../../../providers/UserContext/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../Forms/RegisterForm/validations";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../hooks/useUserContext";
import { BackgroundModalStyle } from "../../../styles/backgroundModal";

const ModalEditProfile = () => {
  const { userEditProfile, setIsModalOpen, user } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: user?.fullName,
      email: user?.email,
      telephone: user?.telephone,
    },
  });

  return (
    <BackgroundModalStyle>
      <div role="dialog">
        <form onSubmit={handleSubmit(userEditProfile)}>
          <Input
            id="fullName"
            {...register("fullName")}
            errors={errors.fullName?.message}
          />
          <Input
            id="email"
            {...register("email")}
            errors={errors.email?.message}
          />
          <Input
            id="password"
            type="password"
            placeholder="Digite aqui sua nova senha"
            {...register("password")}
            errors={errors.password?.message}
          />
          <Input
            id="passwordConfirmation"
            type="password"
            placeholder="Digite novamente a sua senha"
            {...register("passwordConfirmation")}
            errors={errors.passwordConfirmation?.message}
          />
          <Input
            id="telephone"
            {...register("telephone")}
            errors={errors.telephone?.message}
          />
          <button type="submit">Editar</button>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Cancelar
          </button>
        </form>
      </div>
    </BackgroundModalStyle>
  );
};

export default ModalEditProfile;
