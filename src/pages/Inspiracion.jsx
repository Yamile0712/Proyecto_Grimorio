import React from "react";
import { CardsInspiracion } from "../components/CardsInspiracion";

export const Inspiracion = ({ titulo = "NUESTRA INSPIRACIÓN", descripcion }) => {
    return (
        <div id="inspiracion" style={{ backgroundColor: '#111111', padding: '20px', fontFamily: 'titulo', minHeight: '100vh' }}>
        <br />
            <h1 className="text-center mt-5" style={{ color: '#16a34a', marginBottom: '20px' }}>{titulo}</h1>
            <br />
            <div className="d-flex justify-content-center gap-3 flex-wrap align-items-stretch">
                <CardsInspiracion titulo="H.P. LOVERCRAFFT Y EL HORROR CÓSMICO" 
                descripcion="La obra de Lovecraft nos fascinó por su capacidad de 
                evocar un terror que va más allá de lo visible: el miedo a lo 
                desconocido, a lo infinitamente grande e incomprensible. Su relato 
                'El Horror en el Museo' fue la chispa que encendió este proyecto.." />  


                <CardsInspiracion titulo="EL CÓMIC COMO MEDIO NARRATIVO" 
                descripcion="Nos inspiró el poder del cómic para contar historias de 
                forma visual y emocional. Queríamos llevar esa experiencia un paso más 
                allá, haciendo que el lector no solo observe, sino que participe 
                activamente en la narrativa." />

                <CardsInspiracion titulo="NARRATIVAS INTERACTIVAS Y VIDEOJUEGOS" 
                descripcion="Juegos como 'The Stanley Parable' y 'Bandersnatch' 
                nos mostraron que las decisiones del usuario pueden transformar 
                una historia lineal en una experiencia única e irrepetible." />

                  <CardsInspiracion titulo="EL ARTE DEL TERROR VISUAL" 
                descripcion="Artistas como Junji Ito, Mike Mignola y el arte conceptual
                 de películas de terror nos inspiraron a crear un estilo visual oscuro,
                  atmosférico y profundamente inquietante para cada viñeta del cómic." />

            </div>
        </div>
    );
}