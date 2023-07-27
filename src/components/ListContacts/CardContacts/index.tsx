import { useContactsContext } from "../../../hooks/useContactsContext";
import { ICardContactsProps } from "./@types";
import { CardContactsStyle } from "./style";

const CardContacts = ({ contact }: ICardContactsProps) => {
  const { findContactEdit, findContactDelete } = useContactsContext();

  return (
    <CardContactsStyle>
      <h3>{contact.fullName}</h3>
      <p>{contact.telephone}</p>

      <button onClick={() => findContactEdit(contact.id)}>
        Editar Contato
      </button>
      <button onClick={() => findContactDelete(contact.id)}>
        Deletar Contato
      </button>
    </CardContactsStyle>
  );
};

export default CardContacts;
