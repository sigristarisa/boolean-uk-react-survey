import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
