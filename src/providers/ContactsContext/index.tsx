import { createContext, useEffect, useState } from "react";
import {
  IContact,
  IContactsContext,
  IContactsProviderProps,
  IRegisterContact,
} from "./@types";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const ContactsContext = createContext({} as IContactsContext);

export const ContactsProvider = ({ children }: IContactsProviderProps) => {
  const [listContacts, setListContacts] = useState<IContact[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editingContact, setEditingContact] = useState({} as IContact);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [changed, setChanged] = useState(false);

  const token = localStorage.getItem("@KK:TOKEN");

  useEffect(() => {
    const getAllContacts = async () => {
      setLoadingContacts(true);
      try {
        const { data } = await api.get<IContact[]>("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setListContacts(data);
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoadingContacts(false);
        console.clear();
      }
    };

    getAllContacts();
  }, [changed]);

  const createContacts = async (contactData: IRegisterContact) => {
    try {
      await api.post<IContact>("/contacts", contactData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Contato criado");

      setChanged(!changed);
      setIsOpen(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      console.clear();
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

      toast.success("Contato editado");

      setChanged(!changed);
      setIsEditOpen(false);
    } catch (error: any) {
      const message = error?.response?.data?.message;
      console.log(error);

      toast.error(message);
    } finally {
      console.clear();
    }
  };

  const deleteContacts = async () => {
    try {
      await api.delete<IContact>(`/contacts/${editingContact.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Contato deletado");

      setChanged(!changed);
      setIsDeleteOpen(false);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      console.clear();
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
        loadingContacts,
        setLoadingContacts,
      }}>
      {children}
    </ContactsContext.Provider>
  );
};
