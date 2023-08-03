import { useContactsContext } from "../../hooks/useContactsContext";
import EmptyListContacts from "../EmptyListContacts";
import Loading from "../Loading";
import CardContacts from "./CardContacts";
import { ListContactsStyle } from "./style";

const ListContacts = () => {
  const { listContacts, loadingContacts } = useContactsContext();

  return (
    <>
      {loadingContacts ? (
        <Loading />
      ) : listContacts.length ? (
        <ListContactsStyle>
          {listContacts.map((contact) => (
            <CardContacts key={contact.id} contact={contact} />
          ))}
        </ListContactsStyle>
      ) : (
        <EmptyListContacts />
      )}
    </>
  );
};

export default ListContacts;
