export interface IContactsContext {
  listContacts: IContact[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  createContacts: (contactData: IRegisterContact) => Promise<void>;
  findContactEdit: (contactId: string) => void;
  isEditOpen: boolean;
  setIsEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editContacts: (contactData: IRegisterContact) => Promise<void>;
  editingContact: IContact;
  isDeleteOpen: boolean;
  setIsDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContacts: () => Promise<void>;
  findContactDelete: (contactId: string) => void;
}

export interface IContactsProviderProps {
  children: React.ReactNode;
}

export interface IContact {
  id: string;
  fullName: string;
  telephone: string;
  createdAt: string | Date;
}

export interface IRegisterContact {
  fullName: string;
  telephone: string;
}
