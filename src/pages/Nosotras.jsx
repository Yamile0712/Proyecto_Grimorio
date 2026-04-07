
import React from "react";

// 1. COMPONENTE DE LA TARJETA (Hijo)
const CardEquipo = ({ nombre, rol, detalle, }) => {
    return (
        <div className="flip-card" style={containerStyle}>
            <div className="flip-card-inner" style={innerStyle}>

                {/* LADO A: Nombre y Rol */}
                <div style={{ ...faceStyle, ...frontStyle }}>
                    <h3 style={{ color: '#16a34a', marginBottom: '10px' }}>{nombre}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{rol}</p>
                </div>

                {/* LADO B: Información extra */}
                <div style={{ ...faceStyle, ...backStyle }}>
                    <h4 style={{ color: '#16a34a', fontSize: '1.1rem', fontFamily: 'titulo', marginBottom: '15px' }}>SOBRE MÍ</h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.4', fontFamily: 'parrafos' }}>{detalle}</p>
                </div>

            </div>

            {/* CSS para el giro automático al pasar el mouse */}
            <style>{`
        .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
      `}</style>
        </div>
    );
};

// 2. SECCIÓN PRINCIPAL (Padre)
export const Nosotras = ({ titulo = "NUESTRO EQUIPO" }) => {
    return (
        <div style={{ backgroundColor: '#111111', padding: '50px 20px', minHeight: '100vh', textAlign: 'center' }}>
            <h1 style={{ color: '#16a34a', marginBottom: '20px', fontFamily: 'titulo' }}>{titulo}</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', alignItems: 'stretch' }}>
                <CardEquipo
                    nombre="Karol Usuga"
                    rol="Líder en documentación - Ilustradora"
                    detalle="Encargada de la narrativa y el estilo visual gótico del proyecto Grimorio."
                />

                <CardEquipo
                    nombre="Sofía Amaya"
                    rol="Líder en documentación - Ilustradora"
                    detalle="Especialista en el diseño de criaturas y ambientes inspirados en H.P. Lovecraft."
                />

                <CardEquipo
                    nombre="Yamile Arias"
                    rol="Líder en documentación - Ilustradora"
                    detalle="Gestora técnica y creativa encargada de la coherencia documental del equipo."
                />
            </div>
        </div>
    );
};

// --- ESTILOS SENCILLOS ---
const containerStyle = {
    width: '260px',
    height: '320px',
    perspective: '1000px'
};

const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: '0.6s',
    transformStyle: 'preserve-3d'
};

const faceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '15px',
    border: '2px solid #16a34a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
};

const frontStyle = {
    backgroundColor: '#1a1a1a',
    color: 'white'
};

const backStyle = {
    backgroundColor: 'rgba(22, 163, 74, 0.15)',
    color: 'white',
    transform: 'rotateY(180deg)'
};