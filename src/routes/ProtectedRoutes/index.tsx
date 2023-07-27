import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("@KK:TOKEN");
  return token ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
