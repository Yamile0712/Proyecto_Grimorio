import React, { useState } from "react";
import { CardsCapitulos } from "../components/CardsCapitulos";


export const Capitulos = ({ titulo = "VISTA PREVIA DE CAPITULOS" }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const chapters = [
        {
            img: "capitulo1.png",
            titulo: "CAPITULO 1 : EL GRIMORIO DE LOS SUSURROS",
            descripcion: "Un visitante nocturno cruza el umbral del museo. Las puertas se cierran tras él con un eco que resuena por los pasillos vacíos. El aire huele a antiguo, a polvo y a algo más... algo que no debería existir."
        },

        {
            img: "capitulo2.png",
            titulo: "CAPITULO 2 : EL ARTEFACTO",
            descripcion: "Una reliquia antigua despierta fuerzas incomprensibles. Tras la vitrina, una luz verdosa pulsa como un corazón latente. Quien la toque, jamás volverá a ser el mismo."
        },

        {
            img: "capitulo3.png",
            titulo: "CAPITULO 3 : EL GUARDIÁN",
            descripcion: "Alguien—o algo—vigila desde las sombras. Una figura encapuchada recita palabras de un idioma olvidado. El libro que sostiene contiene verdades que la mente humana no puede soportar."
        },

        {
            img: "capitulo4.png",
            titulo: "CAPITULO 4 : EL RITUAL",
            descripcion: "Un círculo de símbolos ancestrales brilla en el suelo de la sala principal. Las paredes susurran cánticos en lenguas muertas. Quien se atreva a pisar el círculo, despertará algo que lleva siglos dormido."
        },
        
        {
            img: "capitulo5.png",
            titulo: "CAPITULO 5 : EL DESPERTAR",
            descripcion: "El portal se abre y una entidad cósmica emerge desde el abismo. Tentáculos de oscuridad envuelven el museo mientras el visitante enfrenta la verdad final: algunos horrores no pueden ser olvidados."
        }
    ];

    const openModal = (index) => {
        setSelectedChapter(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedChapter(null);
    };

    const nextChapter = () => {
        setSelectedChapter((prev) => (prev + 1) % chapters.length);
    };

    const prevChapter = () => {
        setSelectedChapter((prev) => (prev - 1 + chapters.length) % chapters.length);
    };

    return (
        <div id="capitulos" style={{ backgroundColor: '#111111', padding: '50px 20px', minHeight: '100vh', textAlign: 'center' }}>
            <h1 style={{ color: '#16a34a', marginBottom: '40px', fontFamily: 'titulo' }}>{titulo}</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {chapters.map((chapter, index) => (
                    <CardsCapitulos
                        key={index}
                        img={chapter.img}
                        titulo={chapter.titulo}
                        descripcion={chapter.descripcion}
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {/* Modal */}
            {showModal && selectedChapter !== null && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content" style={{ backgroundColor: '#111111', color: 'white' }}>
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ color: '#16a34a', fontFamily: 'titulo' }}>{chapters[selectedChapter].titulo}</h5>
                                <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body text-center">
                                <img src={chapters[selectedChapter].img} alt={chapters[selectedChapter].titulo} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }} />
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' , fontFamily: 'parrafos'}}>{chapters[selectedChapter].descripcion}</p>
                            </div>
                            <div className="modal-footer d-flex justify-content-between" style={{fontFamily:'parrafos'}}>
                                <button className="btn btn-secondary" onClick={prevChapter} disabled={chapters.length <= 1}>
                                    ← Anterior
                                </button>
                                <button className="btn btn-secondary" onClick={nextChapter} disabled={chapters.length <= 1}>
                                    Siguiente →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};