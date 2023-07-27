import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("@KK:TOKEN");

  return !token ? <Outlet /> : <Navigate to="/dashboard" />;
};
export default PublicRoutes;
