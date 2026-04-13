import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import "./App.css";
import "./style/css.css";
import { Grimorio } from "./pages/Grimorio";
import { Proyecto } from "./pages/Proyecto";
import { Inspiracion } from "./pages/Inspiracion";
import { Nosotras } from "./pages/Nosotras";
import { Personajes } from "./pages/Personajes";
import { Capitulos } from "./pages/Capitulos";
import Juego from "./pages/juego";
import { Footer } from "./pages/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Grimorio />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/inspiracion" element={<Inspiracion />} />
        <Route path="/equipo" element={<Nosotras />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/capitulos" element={<Capitulos />} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;