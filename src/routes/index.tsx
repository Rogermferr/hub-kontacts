import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardPage from "../pages/DashboardPage";
import { ContactsProvider } from "../providers/ContactsContext";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <ContactsProvider>
              <DashboardPage />
            </ContactsProvider>
          }></Route>
      </Route>
    </Routes>
  );
};

export default RouterMain;
