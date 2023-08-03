import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardPage from "../pages/DashboardPage";
import { ContactsProvider } from "../providers/ContactsContext";
import Loading from "../components/Loading";
import { useUserContext } from "../hooks/useUserContext";
import { AnimatePresence } from "framer-motion";

const RouterMain = () => {
  const { loading } = useUserContext();

  return (
    <AnimatePresence>
      <>
        {loading ? (
          <Loading />
        ) : (
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
        )}
      </>
    </AnimatePresence>
  );
};

export default RouterMain;
