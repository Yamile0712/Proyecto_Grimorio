import React from "react";

export const Card = ({ titulo, descripcion }) => {
    return (
        <div className="card" style={{ width: '18rem', border: '2px solid #00ff99', backgroundColor: '#111111', color: 'white', boxShadow: '0 0 10px rgba(0, 255, 153, 0.3)', margin: '12px' }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: 'white' }}>{titulo}</h5>
                <p className="card-text" style={{ color: 'white' }}>{descripcion}</p>
            </div>
        </div>
    );
};