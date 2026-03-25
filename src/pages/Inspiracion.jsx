import React from "react";
import { Cards2 } from "../components/Cards2";

export const Inspiracion = ({ titulo = "NUESTRA INSPIRACIÓN", descripcion = "La inspiración para este proyecto surge del universo de H.P. Lovecraft, donde el horror cósmico y la paranoia se entrelazan para crear una experiencia única." }) => {
    return (
        <div style={{ backgroundColor: '#111111', padding: '20px' }}>
        <br />
            <h1 className="text-center mt-5" style={{ color: '#16a34a' }}>{titulo}</h1>
            <br />
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Cards2 titulo="H.P. Lovecraft y el Horror Cósmico" 
                descripcion="La obra de Lovecraft nos fascinó por su capacidad de 
                evocar un terror que va más allá de lo visible: el miedo a lo 
                desconocido, a lo infinitamente grande e incomprensible. Su relato 
                'El Horror en el Museo' fue la chispa que encendió este proyecto.." />  


                <Cards2 titulo="El Cómic como Medio Narrativo" 
                descripcion="Nos inspiró el poder del cómic para contar historias de 
                forma visual y emocional. Queríamos llevar esa experiencia un paso más 
                allá, haciendo que el lector no solo observe, sino que participe 
                activamente en la narrativa." />

                <Cards2 titulo="Narrativas Interactivas y Videojuegos" 
                descripcion="Juegos como 'The Stanley Parable' y 'Bandersnatch' 
                nos mostraron que las decisiones del usuario pueden transformar 
                una historia lineal en una experiencia única e irrepetible." />

                  <Cards2 titulo="El Arte del Terror Visual" 
                descripcion="Artistas como Junji Ito, Mike Mignola y el arte conceptual
                 de películas de terror nos inspiraron a crear un estilo visual oscuro,
                  atmosférico y profundamente inquietante para cada viñeta del cómic." />

            </div>
        </div>
    );
}