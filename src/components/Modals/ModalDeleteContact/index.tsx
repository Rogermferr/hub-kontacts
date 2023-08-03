import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { useContactsContext } from "../../../hooks/useContactsContext";
import { ModalDeleteStyle } from "../style";
import useOutClick from "../../../hooks/useOutClick";
import useKeyDown from "../../../hooks/useKeyDown";
import { motion } from "framer-motion";

const ModalDeleteContact = () => {
  const { setIsDeleteOpen, deleteContacts } = useContactsContext();

  const modalRef = useOutClick(() => {
    setIsDeleteOpen(false);
  });

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <BackgroundModalStyle>
      <motion.section
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        <ModalDeleteStyle role="dialog" ref={modalRef}>
          <h2>Deseja mesmo deletar este contato?</h2>
          <button onClick={deleteContacts}>Deletar</button>
          <button onClick={() => setIsDeleteOpen(false)} ref={buttonRef}>
            Cancelar
          </button>
        </ModalDeleteStyle>
      </motion.section>
    </BackgroundModalStyle>
  );
};

export default ModalDeleteContact;
