import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="bg-black">
      <div className="header container" >
        <div className="logo">
          <span className="logo-icon">✧</span>
          <span className="logo-text" style={{ fontFamily: 'titulo' }}>GRIMORIO</span>
        </div>

        <nav className="nav">
          <Link to="/" className="nav-item" style={{ fontFamily: 'parrafos' }}>Inicio</Link>
          <Link to="/proyecto" className="nav-item" style={{ fontFamily: 'parrafos' }}>Proyecto</Link>
          <Link to="/inspiracion" className="nav-item" style={{ fontFamily: 'parrafos' }}>Inspiración</Link>
          <Link to="/equipo" className="nav-item" style={{ fontFamily: 'parrafos' }}>Equipo</Link>
          <Link to="/personajes" className="nav-item" style={{ fontFamily: 'parrafos' }}>Personajes</Link>
          <Link to="/capitulos" className="nav-item" style={{ fontFamily: 'parrafos' }}>Capítulos</Link>
          <Link to="/juego" className="nav-item game" style={{ fontFamily: 'parrafos' }}>🎮 Juego</Link>
        </nav>
      </div>
    </header>
  );
};