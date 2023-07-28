import Input from "../../Input";
import { IRegisterUser } from "../../../providers/UserContext/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../Forms/RegisterForm/validations";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../../hooks/useUserContext";
import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { ModalFormStyle } from "../style";
import useOutClick from "../../../hooks/useOutClick";
import useKeyDown from "../../../hooks/useKeyDown";

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
    mode: "onChange",
  });

  const modalRef = useOutClick(() => {
    setIsModalOpen(false);
  });

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <BackgroundModalStyle>
      <ModalFormStyle role="dialog" ref={modalRef}>
        <form onSubmit={handleSubmit(userEditProfile)}>
          <Input
            id="fullName"
            label="Nome Completo"
            {...register("fullName")}
            errors={errors.fullName?.message}
          />
          <Input
            id="email"
            label="Email"
            {...register("email")}
            errors={errors.email?.message}
          />
          <Input
            id="password"
            type="password"
            label="Senha"
            placeholder="Digite aqui sua nova senha"
            {...register("password")}
            errors={errors.password?.message}
          />
          <Input
            id="passwordConfirmation"
            type="password"
            label="Confirmação de senha"
            placeholder="Digite novamente a sua senha"
            {...register("passwordConfirmation")}
            errors={errors.passwordConfirmation?.message}
          />
          <Input
            id="telephone"
            label="Número de telefone"
            {...register("telephone")}
            errors={errors.telephone?.message}
          />
          <button type="submit">Editar</button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            ref={buttonRef}>
            Cancelar
          </button>
        </form>
      </ModalFormStyle>
    </BackgroundModalStyle>
  );
};

export default ModalEditProfile;
