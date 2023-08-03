export interface IUserContext {
  userLogin: (loginData: ILoginUser) => Promise<void>;
  userRegister: (userData: IRegisterUser) => Promise<void>;
  userLogout: () => void;
  userEditProfile: (userData: IRegisterUser) => Promise<void>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  isModalDeleteOpen: boolean;
  setIsModalDeleteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userDeleteProfile: () => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  telephone: string;
  createdAt: string | Date;
}

export interface IRegisterUser {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  telephone: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IResponseLogin {
  token: string;
  user: IUser;
}
