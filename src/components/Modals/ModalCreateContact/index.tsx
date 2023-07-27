import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { useForm } from "react-hook-form";
import { IRegisterContact } from "../../../providers/ContactsContext/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerContactSchema } from "./validations";
import Input from "../../Input";
import { useContactsContext } from "../../../hooks/useContactsContext";
import { ModalFormStyle } from "../style";

const ModalCreateContact = () => {
  const { createContacts, setIsOpen } = useContactsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterContact>({
    resolver: zodResolver(registerContactSchema),
    mode: "onChange",
  });

  return (
    <BackgroundModalStyle>
      <ModalFormStyle role="dialog">
        <form onSubmit={handleSubmit(createContacts)}>
          <Input
            id="fullName"
            label="Nome completo"
            placeholder="Digite o nome do contato aqui"
            {...register("fullName")}
            errors={errors.fullName?.message}
          />
          <Input
            id="telephone"
            label="Número de telefone"
            type="number"
            placeholder="DDD e o número do telefone"
            {...register("telephone")}
            errors={errors.telephone?.message}
          />
          <button type="submit">Criar</button>
          <button type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </button>
        </form>
      </ModalFormStyle>
    </BackgroundModalStyle>
  );
};

export default ModalCreateContact;
