import { useContactsContext } from "../../hooks/useContactsContext";
import EmptyListContacts from "../EmptyListContacts";
import CardContacts from "./CardContacts";
import { ListContactsStyle } from "./style";

const ListContacts = () => {
  const { listContacts } = useContactsContext();

  return (
    <>
      {listContacts.length ? (
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
