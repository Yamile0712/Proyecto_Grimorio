import React, { useState } from "react";
import "../style/css.css";

export const Grimorio = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <div id="inicio" className="text-center" style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.42)), url("fondo.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1 style={{ color: ' #16a34a', fontSize: '5rem', fontFamily:"titulo"  }}>GRIMORIO</h1>
                <br />
                <h4 style={{ color: 'white',  fontSize: '2rem' , fontFamily:"parrafos"}}>El Horror en el Museo de H.P. Lovecraft</h4>
                <p style={{ color: 'white',  fontSize: '1.5rem', fontFamily:"parrafos" }}>Un cómic interactivo donde tus decisiones determinan tu destino.
                    Explora los pasillos del <br /> museo maldito y enfrenta los horrores que
                    acechan en la oscuridad.</p>

                <div className="d-flex justify-content-center gap-3 mt-4">

                    <button type="button" className="btn btn-primary btn-lg" style={{
                        backgroundColor: '#16a34a',
                        borderColor: '#16a34a', fontFamily: 'titulo'
                    }} onClick={() => document.getElementById('capitulos').scrollIntoView({ behavior: 'smooth' })}>COMENZAR AVENTURA</button>

                    <button type="button" className="btn btn-primary btn-lg" style={{
                        backgroundColor:
                            '#16a34a', borderColor: '#16a34a', fontFamily: 'titulo'
                    }} onClick={() => setShowVideo(true)}>VER AVANCE
                    </button>

                </div>
            </div>

            {/* Modal para el video */}
            {showVideo && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Avance del Cómic</h5>
                                <button type="button" className="btn-close" onClick={() => setShowVideo(false)}></button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Placeholder: reemplaza con la URL real del video
                                    title="Avance"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
