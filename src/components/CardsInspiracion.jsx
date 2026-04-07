import React from "react";
import "./HoverCards.css";

export const CardsInspiracion = ({ titulo, descripcion }) => {
    return (
        <div className="card2 hover-card" style={{ width: '35rem', minHeight: '200px', border: '2px solid #00ff99', backgroundColor: '#08310f3f', color: 'white', boxShadow: '0 0 10px rgba(0, 255, 153, 0.3)', margin: '12px', padding: '16px', borderRadius: '8px' }}>
            <div className="cards2-body" style={{ display: 'flex', flexDirection: 'column' }}>
                <h5 className="cards2-title" style={{ color: 'white', fontFamily: 'titulo', marginBottom: '15px' }}>{titulo}</h5>
                <p className="cards2-text" style={{ color: 'white', fontFamily: 'parrafos' }}>{descripcion}</p>
            </div>
        </div>
    );
};