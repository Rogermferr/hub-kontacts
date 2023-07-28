import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import Input from "../../Input";
import { useForm } from "react-hook-form";
import { IRegisterContact } from "../../../providers/ContactsContext/@types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerContactSchema } from "../ModalCreateContact/validations";
import { useContactsContext } from "../../../hooks/useContactsContext";
import { ModalFormStyle } from "../style";
import useOutClick from "../../../hooks/useOutClick";
import useKeyDown from "../../../hooks/useKeyDown";

const ModalEditContact = () => {
  const { editContacts, setIsEditOpen, editingContact } = useContactsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterContact>({
    resolver: zodResolver(registerContactSchema),
    defaultValues: {
      fullName: editingContact.fullName,
      telephone: editingContact.telephone,
    },
    mode: "onChange",
  });

  const modalRef = useOutClick(() => {
    setIsEditOpen(false);
  });

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <BackgroundModalStyle>
      <ModalFormStyle role="dialog" ref={modalRef}>
        <form onSubmit={handleSubmit(editContacts)}>
          <Input
            id="fullName"
            label="Nome completo"
            {...register("fullName")}
            errors={errors.fullName?.message}
          />
          <Input
            id="email"
            label="Email"
            placeholder="Digite o email do contato aqui"
            {...register("email")}
            errors={errors.email?.message}
          />
          <Input
            id="telephone"
            label="Número de telefone"
            type="number"
            {...register("telephone")}
            errors={errors.telephone?.message}
          />
          <button type="submit">Editar</button>
          <button
            type="button"
            onClick={() => setIsEditOpen(false)}
            ref={buttonRef}>
            Cancelar
          </button>
        </form>
      </ModalFormStyle>
    </BackgroundModalStyle>
  );
};

export default ModalEditContact;
