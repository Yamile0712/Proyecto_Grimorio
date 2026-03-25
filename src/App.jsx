import React from "react";

import { Header } from "./components/Header";
import "./App.css";
import { Grimorio} from "./pages/Grimorio";
import { Proyecto} from "./pages/Proyecto";
import { Inspiracion} from "./pages/Inspiracion";
import { Nosotras} from "./pages/Nosotras";

const App = () => {
  return (
    <>
     
     <Header />
      <Grimorio />
      <Proyecto/>
      <Inspiracion />
      <Nosotras />

    </>
  );
};

export default App;