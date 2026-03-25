import React from "react";

export const Nosotras = () => {
    return (
        <div style={{ backgroundColor: '#111111', padding: '20px' }}>
            <br />
            <h1 className="text-center mt-5" style={{ color: '#16a34a' }}>SOBRE NOSOTRAS</h1>
            <br />
            <div className="row gx-3 gy-3 justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="card" style={{ width: '100%' }}>
                        <img src="..." className="card-img-top" alt="equipo" />
                        <div className="card-body">
                            <h5 className="card-title">Karol Usuga</h5>
                            <p className="card-text">Somos un equipo apasionado de creadores digitales, ilustradores y narradores que se unieron con una visión común.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card" style={{ width: '100%' }}>
                        <img src="..." className="card-img-top" alt="pasion" />
                        <div className="card-body">
                            <h5 className="card-title">Sofia Amaya</h5>
                            <p className="card-text">La fusión de arte, tecnología y narrativa es lo que nos impulsa. Creemos en el poder de las historias.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="card" style={{ width: '100%' }}>
                        <img src="..." className="card-img-top" alt="compromiso" />
                        <div className="card-body">
                            <h5 className="card-title">Yamile Arias</h5>
                            <p className="card-text">Cada detalle de Grimorio ha sido cuidadosamente diseñado para ofrecer una experiencia inmersiva y memorable.</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}