import { useContext } from "react";
import { UserContext } from "../providers/UserContext";

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  return userContext;
};
