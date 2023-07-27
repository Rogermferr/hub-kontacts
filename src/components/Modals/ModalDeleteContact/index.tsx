import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { useContactsContext } from "../../../hooks/useContactsContext";

const ModalDeleteContact = () => {
  const { setIsDeleteOpen, deleteContacts } = useContactsContext();
  return (
    <BackgroundModalStyle>
      <div role="dialog">
        <h2>Deseja mesmo deletar este contato</h2>
        <button onClick={deleteContacts}>Deletar</button>
        <button onClick={() => setIsDeleteOpen(false)}>Cancelar</button>
      </div>
    </BackgroundModalStyle>
  );
};

export default ModalDeleteContact;
