import Header from "../../components/Header";
import ListContacts from "../../components/ListContacts";
import Menu from "../../components/Menu";
import ModalCreateContact from "../../components/Modals/ModalCreateContact";
import ModalDeleteContact from "../../components/Modals/ModalDeleteContact";
import ModalDeleteProfile from "../../components/Modals/ModalDeleteProfile";
import ModalEditContact from "../../components/Modals/ModalEditContact";
import ModalEditProfile from "../../components/Modals/ModalEditProfile";
import { useContactsContext } from "../../hooks/useContactsContext";
import { useUserContext } from "../../hooks/useUserContext";
import { DashboardPageStyle } from "./style";
import { motion } from "framer-motion";

const DashboardPage = () => {
  const { isModalOpen, user, isModalDeleteOpen } = useUserContext();
  const { isOpen, isEditOpen, isDeleteOpen } = useContactsContext();

  return (
    <DashboardPageStyle>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <Header />
        <Menu />
        <main>
          <h1>
            Olá!
            <br /> {user?.fullName}
          </h1>
          <h2>Seus Contatos:</h2>
          <ListContacts />
        </main>
      </motion.div>
      {isModalOpen && <ModalEditProfile />}
      {isOpen && <ModalCreateContact />}
      {isModalDeleteOpen && <ModalDeleteProfile />}
      {isEditOpen && <ModalEditContact />}
      {isDeleteOpen && <ModalDeleteContact />}
    </DashboardPageStyle>
  );
};

export default DashboardPage;
