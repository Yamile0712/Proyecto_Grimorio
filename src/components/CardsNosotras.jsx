import React from "react";

export const CardsNosotras = ({ titulo, descripcion }) => {
    return (

        <>
            <div class="card3" style={{ width: '35rem', minHeight: '20px', border: '2px solid #00ff99', backgroundColor: '#08310f3f', color: 'white', boxShadow: '0 0 10px rgba(0, 255, 153, 0.3)', borderRadius: '8px' }}   >
                <img src="..." alt="..."/>
                    <div  style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5 style={{ color: 'white' }}>{titulo}</h5>
                        <p  style={{ color: 'white' }}>{descripcion}</p>

                    </div>
            </div>
        </>

    );
};