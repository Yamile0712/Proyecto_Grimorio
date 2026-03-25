
import React from "react";

export const CardsPersonajes = ({ titulo, descripcion }) => {
    return (
        <div style={{ ...containerStyle}} className="flip-container">
            <div style={innerStyle} className="flip-inner">

                {/* PARTE FRONTAL (Escudo y Nombre) */}
                <div style={{ ...faceStyle, ...frontStyle,  }}>
                    <div style={{ ...iconStyle,  }}>🛡️</div>
                    <h2 style={{ color: 'white', margin: 0 }}>{titulo}</h2>
                </div>

                {/* PARTE TRASERA (Descripción) */}
                <div style={{ ...faceStyle, ...backStyle }}>
                    <h3 style={{ color:  '#16a34a', marginBottom: '10px' }}>Historia</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{descripcion}</p>
                </div>

            </div>

            {/* Estilo necesario para el efecto de giro al pasar el mouse */}
            <style>{`
        .flip-container:hover .flip-inner {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
};

// --- ESTILOS EN OBJETOS (Más fácil de leer) ---

const containerStyle = {
    width: '220px',
    height: '300px',
    perspective: '1000px',
    margin: '15px'
};

const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d'
};

const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden', // Oculta la otra cara al girar
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
    border: '2px solid #00ff99'
};

const frontStyle = {
    backgroundColor: '#111111',
    color: 'white'
};

const backStyle = {
    backgroundColor: '#2d1b33', // Morado oscuro como tu imagen
    color: 'white',
    transform: 'rotateY(180deg)' // La cara de atrás empieza invertida
};

const iconStyle = {
    fontSize: '50px',
    marginBottom: '20px',
    filter: 'drop-shadow(0 0 5px #00ff99)'

};
