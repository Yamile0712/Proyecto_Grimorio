import React from "react";

export const CardsCapitulos = ({ titulo, descripcion, img, onClick }) => {
    return (

        <>
            <div className="card3  " style={{ width: '25rem', border: '2px solid #00ff99', backgroundColor: '#08310f3f', color: 'white', boxShadow: '0 0 10px rgba(0, 255, 153, 0.3)', borderRadius: '8px', cursor: 'pointer', fontFamily: 'titulo' }} onClick={onClick}   >
                <img src={img} className="card3-img-top h-50 w-100" alt="..." style={{ marginBottom: '15px', borderBottom: '1px solid rgba(255,255,255,0.1)' }} />
                <div className="card3-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h5 className="capitulo-title" style={{ color: 'white', fontFamily: 'titulo', marginBottom: '15px' }}>{titulo}</h5>
                    <p className="capitulo-text" style={{ color: 'white', fontFamily: 'parrafos' }}>{descripcion}</p>
                </div>
            </div>

        </>


    );
};