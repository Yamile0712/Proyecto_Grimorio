import React from "react";

import { Header } from "./components/Header";
import "./App.css";
import { Grimorio } from "./pages/Grimorio";
import { Proyecto } from "./pages/Proyecto";
import { Inspiracion } from "./pages/Inspiracion";
import { Nosotras } from "./pages/Nosotras";
import { Personajes } from "./pages/Personajes";
import { Capitulos } from "./pages/Capitulos";
import { Footer} from "./pages/Footer";


const App = () => {
  return (
    <>

      <Header />
      <Grimorio />
      <Proyecto />
      <Inspiracion />
      <Nosotras />
      <Personajes />
      <Capitulos />
      <Footer />

    </>
  );
};

export default App;