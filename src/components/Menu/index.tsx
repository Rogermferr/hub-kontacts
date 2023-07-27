import { useContactsContext } from "../../hooks/useContactsContext";
import { useUserContext } from "../../hooks/useUserContext";
import { MenuStyle } from "./style";

const Menu = () => {
  const { userLogout, setIsModalOpen, setIsModalDeleteOpen } = useUserContext();
  const { setIsOpen } = useContactsContext();

  return (
    <MenuStyle>
      <button onClick={() => setIsOpen(true)}>Adicionar Contato</button>
      <button onClick={() => setIsModalOpen(true)}>Editar Perfil</button>
      <button onClick={() => setIsModalDeleteOpen(true)}>Deletar Perfil</button>
      <button onClick={userLogout}>Sair</button>
    </MenuStyle>
  );
};

export default Menu;
