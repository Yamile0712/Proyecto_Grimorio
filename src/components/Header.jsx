import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">✧</span>
        <span className="logo-text">GRIMORIO</span>
      </div>

      <nav className="nav">
        <a href="#" className="nav-item ">Inicio</a>
        <a href="#" className="nav-item">Proyecto</a>
        <a href="#" className="nav-item">Equipo</a>
        <a href="#" className="nav-item">Personajes</a>
        <a href="#" className="nav-item">Capítulos</a>
        <a href="#" className="nav-item game">🎮 Juego</a>
      </nav>
    </header>
  );
};