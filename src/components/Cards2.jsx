import React from "react";

export const Cards2 = ({ titulo, descripcion }) => {
    return (
        <div className="card2" style={{ width: '35rem', minHeight: '20px', border: '2px solid #00ff99', backgroundColor: '#111111', color: 'white', boxShadow: '0 0 10px rgba(0, 255, 153, 0.3)', margin: '12px', padding: '16px', borderRadius: '8px' }}>
            <div className="cards2-body" style={{ display: 'flex', flexDirection: 'column' }}>
                <h5 className="cards2-title" style={{ color: 'white' }}>{titulo}</h5>
                <p className="cards2-text" style={{ color: 'white'}}>{descripcion}</p>
            </div>
        </div>
    );
};