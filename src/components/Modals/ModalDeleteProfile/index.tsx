import useKeyDown from "../../../hooks/useKeyDown";
import useOutClick from "../../../hooks/useOutClick";
import { useUserContext } from "../../../hooks/useUserContext";
import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { ModalDeleteStyle } from "../style";

const ModalDeleteProfile = () => {
  const { setIsModalDeleteOpen, userDeleteProfile } = useUserContext();

  const modalRef = useOutClick(() => {
    setIsModalDeleteOpen(false);
  });

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  return (
    <BackgroundModalStyle>
      <ModalDeleteStyle role="dialog" ref={modalRef}>
        <h2>Deseja mesmo deletar seu perfil? Todos os dados serão perdidos!</h2>
        <button onClick={userDeleteProfile}>Deletar</button>
        <button onClick={() => setIsModalDeleteOpen(false)} ref={buttonRef}>
          Cancelar
        </button>
      </ModalDeleteStyle>
    </BackgroundModalStyle>
  );
};

export default ModalDeleteProfile;
