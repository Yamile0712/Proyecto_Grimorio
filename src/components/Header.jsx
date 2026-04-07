import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header" >
      <div className="logo">
        <span className="logo-icon">✧</span>
        <span className="logo-text" style={{fontFamily:'titulo'}}>GRIMORIO</span>
      </div>

      <nav className="nav">
        <a href="#" className="nav-item " style={{fontFamily:'parrafos'}}>Inicio</a>
        <a href="#" className="nav-item" style={{fontFamily:'parrafos'}}>Proyecto</a>
        <a href="#" className="nav-item" style={{fontFamily:'parrafos'}}>Equipo</a>
        <a href="#" className="nav-item" style={{fontFamily:'parrafos'}}>Personajes</a>
        <a href="#" className="nav-item" style={{fontFamily:'parrafos'}}>Capítulos</a>
        <a href="#" className="nav-item game" style={{fontFamily:'parrafos'}}>🎮 Juego</a>
      </nav>
    </header>
  );
};