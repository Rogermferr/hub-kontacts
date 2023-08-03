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
  loadingContacts: boolean;
  setLoadingContacts: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IContactsProviderProps {
  children: React.ReactNode;
}

export interface IContact {
  id: string;
  fullName: string;
  email: string;
  telephone: string;
  createdAt: string | Date;
}

export interface IRegisterContact {
  fullName: string;
  email: string;
  telephone: string;
}
