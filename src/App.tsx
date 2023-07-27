import { ToastContainer } from "react-toastify";
import RouterMain from "./routes";
import { GlobalReset } from "./styles/reset";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalReset />
      <RouterMain />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
