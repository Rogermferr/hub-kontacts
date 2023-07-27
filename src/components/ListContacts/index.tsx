import { useContactsContext } from "../../hooks/useContactsContext";
import CardContacts from "./CardContacts";
import { ListContactsStyle } from "./style";

const ListContacts = () => {
  const { listContacts } = useContactsContext();

  return (
    <ListContactsStyle>
      {listContacts.map((contact) => (
        <CardContacts key={contact.id} contact={contact} />
      ))}
    </ListContactsStyle>
  );
};

export default ListContacts;
