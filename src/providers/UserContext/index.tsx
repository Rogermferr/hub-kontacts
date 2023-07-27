import { createContext, useEffect, useState } from "react";
import {
  ILoginUser,
  IRegisterUser,
  IResponseLogin,
  IUser,
  IUserContext,
  IUserProviderProps,
} from "./@types";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const token = localStorage.getItem("@KK:TOKEN");

  useEffect(() => {
    const getUserInfos = async () => {
      try {
        const { data } = await api.get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserInfos();
  }, [isModalOpen, isModalDeleteOpen]);

  const userLogin = async (loginData: ILoginUser) => {
    try {
      const { data } = await api.post<IResponseLogin>("/login", loginData);

      localStorage.setItem("@KK:TOKEN", data.token);
      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      setUser(data.user);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const userRegister = async (userData: IRegisterUser) => {
    const { passwordConfirmation, ...newUserData } = userData;

    try {
      await api.post<IRegisterUser>("/users", newUserData);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@KK:TOKEN");
    navigate("/");
  };

  const userEditProfile = async (userData: IRegisterUser) => {
    try {
      await api.patch<IRegisterUser>("/users", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const userDeleteProfile = async () => {
    try {
      await api.delete("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsModalDeleteOpen(false);
      setUser(null);
      localStorage.removeItem("@KK:TOKEN");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        userLogout,
        userEditProfile,
        isModalOpen,
        setIsModalOpen,
        user,
        isModalDeleteOpen,
        setIsModalDeleteOpen,
        userDeleteProfile,
      }}>
      {children}
    </UserContext.Provider>
  );
};
