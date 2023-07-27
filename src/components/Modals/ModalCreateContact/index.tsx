import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { useForm } from "react-hook-form";
import { IRegisterContact } from "../../../providers/ContactsContext/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerContactSchema } from "./validations";
import Input from "../../Input";
import { useContactsContext } from "../../../hooks/useContactsContext";

const ModalCreateContact = () => {
  const { createContacts, setIsOpen } = useContactsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterContact>({
    resolver: zodResolver(registerContactSchema),
  });

  return (
    <BackgroundModalStyle>
      <div role="dialog">
        <form onSubmit={handleSubmit(createContacts)}>
          <Input
            id="fullName"
            {...register("fullName")}
            errors={errors.fullName?.message}
          />
          <Input
            id="telephone"
            {...register("telephone")}
            errors={errors.telephone?.message}
          />
          <button type="submit">Criar</button>
          <button type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </button>
        </form>
      </div>
    </BackgroundModalStyle>
  );
};

export default ModalCreateContact;
