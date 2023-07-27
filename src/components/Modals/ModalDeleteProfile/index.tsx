import { useUserContext } from "../../../hooks/useUserContext";
import { BackgroundModalStyle } from "../../../styles/backgroundModal";

const ModalDeleteProfile = () => {
  const { setIsModalDeleteOpen, userDeleteProfile } = useUserContext();

  return (
    <BackgroundModalStyle>
      <div role="dialog">
        <h2>Deseja mesmo deletar seu perfil</h2>
        <button onClick={userDeleteProfile}>Deletar</button>
        <button onClick={() => setIsModalDeleteOpen(false)}>Cancelar</button>
      </div>
    </BackgroundModalStyle>
  );
};

export default ModalDeleteProfile;
