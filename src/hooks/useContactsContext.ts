import { useContext } from "react";
import { ContactsContext } from "../providers/ContactsContext";

export const useContactsContext = () => {
  const contactsContext = useContext(ContactsContext);

  return contactsContext;
};
