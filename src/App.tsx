import RouterMain from "./routes";
import { GlobalReset } from "./styles/reset";

const App = () => {
  return (
    <>
      <GlobalReset />
      <RouterMain />
    </>
  );
};

export default App;
