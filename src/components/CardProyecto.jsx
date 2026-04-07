import React from "react";
import "./CardProyecto.css";
import "./HoverCards.css";
import "../style/css.css";

export const CardProyecto = ({ titulo, descripcion }) => {
    return (
        <div className="card card-proyecto hover-card">
            <div className="card-body">
                <h5 className="card-title" style={{ fontFamily: "titulo" }}>{titulo}</h5>
                <p className="card-text" style={{ fontFamily: "parrafos" }}>{descripcion}</p>
            </div>
        </div>
    );
};