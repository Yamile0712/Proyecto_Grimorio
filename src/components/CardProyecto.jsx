import React from "react";
import "./CardProyecto.css";

export const CardProyecto = ({ titulo, descripcion }) => {
    return (
        <div className="card card-proyecto">
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    );
};