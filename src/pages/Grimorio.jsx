import React from "react";
import '../style/css.css';

export const Grimorio = () => {
    return (
        <>
            <div className="text-center" style={{
                background: 'linear-gradient(rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.42)), url("fondo.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1 style={{ color: ' #16a34a', fontFamily: 'titulo' }}>GRIMORIO</h1>
                <br />
                <h4 style={{ color: 'white', fontFamily: 'texto' }}>El Horror en el Museo de H.P. Lovecraft</h4>
                <p style={{ color: 'white', fontFamily: 'texto' }}>Un cómic interactivo donde tus decisiones determinan tu destino.
                    Explora los pasillos del <br /> museo maldito y enfrenta los horrores que
                    acechan en la oscuridad.</p>

                <div className="d-flex justify-content-center gap-3 mt-4">

                    <button type="button" className="btn btn-primary btn-lg" style={{
                        backgroundColor: '#16a34a',
                        borderColor: '#16a34a'
                    }} disabled>COMENZAR AVENTURA</button>

                    <button type="button" className="btn btn-primary btn-lg" style={{
                        backgroundColor:
                            '#16a34a', borderColor: '#16a34a'
                    }} disabled>VER AVANCE
                    </button>

                </div>
            </div>

        </>
    );
}
