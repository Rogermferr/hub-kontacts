import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { useContactsContext } from "../../../hooks/useContactsContext";
import { ModalDeleteStyle } from "../style";

const ModalDeleteContact = () => {
  const { setIsDeleteOpen, deleteContacts } = useContactsContext();
  return (
    <BackgroundModalStyle>
      <ModalDeleteStyle role="dialog">
        <h2>Deseja mesmo deletar este contato</h2>
        <button onClick={deleteContacts}>Deletar</button>
        <button onClick={() => setIsDeleteOpen(false)}>Cancelar</button>
      </ModalDeleteStyle>
    </BackgroundModalStyle>
  );
};

export default ModalDeleteContact;
