import { useUserContext } from "../../../hooks/useUserContext";
import { BackgroundModalStyle } from "../../../styles/backgroundModal";
import { ModalDeleteStyle } from "../style";

const ModalDeleteProfile = () => {
  const { setIsModalDeleteOpen, userDeleteProfile } = useUserContext();

  return (
    <BackgroundModalStyle>
      <ModalDeleteStyle role="dialog">
        <h2>Deseja mesmo deletar seu perfil</h2>
        <button onClick={userDeleteProfile}>Deletar</button>
        <button onClick={() => setIsModalDeleteOpen(false)}>Cancelar</button>
      </ModalDeleteStyle>
    </BackgroundModalStyle>
  );
};

export default ModalDeleteProfile;
