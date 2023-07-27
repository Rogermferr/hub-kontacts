import { createContext, useEffect, useState } from "react";
import {
  IContact,
  IContactsContext,
  IContactsProviderProps,
  IRegisterContact,
} from "./@types";
import { api } from "../../services/api";

export const ContactsContext = createContext({} as IContactsContext);

export const ContactsProvider = ({ children }: IContactsProviderProps) => {
  const [listContacts, setListContacts] = useState<IContact[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editingContact, setEditingContact] = useState({} as IContact);

  const token = localStorage.getItem("@KK:TOKEN");

  useEffect(() => {
    const getAllContacts = async () => {
      try {
        const { data } = await api.get<IContact[]>("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setListContacts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllContacts();
  }, [isOpen, isEditOpen, isDeleteOpen]);

  const createContacts = async (contactData: IRegisterContact) => {
    try {
      await api.post<IContact>("/contacts", contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const findContactEdit = (contactId: string) => {
    const contactFounded = listContacts.find(
      (contact) => contact.id === contactId
    );

    setIsEditOpen(true);
    setEditingContact(contactFounded!);
  };

  const findContactDelete = (contactId: string) => {
    const contactFounded = listContacts.find(
      (contact) => contact.id === contactId
    );

    setIsDeleteOpen(true);
    setEditingContact(contactFounded!);
  };

  const editContacts = async (contactData: IRegisterContact) => {
    try {
      await api.patch<IContact>(`/contacts/${editingContact.id}`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsEditOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteContacts = async () => {
    try {
      await api.delete<IContact>(`/contacts/${editingContact.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsDeleteOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        listContacts,
        isOpen,
        setIsOpen,
        createContacts,
        findContactEdit,
        isEditOpen,
        setIsEditOpen,
        editContacts,
        editingContact,
        isDeleteOpen,
        setIsDeleteOpen,
        deleteContacts,
        findContactDelete,
      }}>
      {children}
    </ContactsContext.Provider>
  );
};
