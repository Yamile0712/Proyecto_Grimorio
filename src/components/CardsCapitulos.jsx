import React from "react";

export const CardsCapitulos = ({ titulo, descripcion, img}) => {
    return (

        <>
            <div className="card3  " style={{ width: '25rem', border: '2px solid #00ff99', backgroundColor: '#08310f3f', color: 'white', boxShadow: '0 0 10px rgba(0, 255, 153, 0.3)', borderRadius: '8px' }}   >
                <img src={img} className="card3-img-top h-50 w-100 " alt="..." />
                <div className="card3-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h5 className="capitulo-title" style={{ color: 'white' }}>{titulo}</h5>
                    <p className="capitulo-text" style={{ color: 'white' }}>{descripcion}</p>
                </div>
            </div>

        </>


    );
};