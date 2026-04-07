import React from "react";
import { CardsPersonajes } from "../components/CardsPersonajes";

export const Personajes = ({ titulo = "PERSONAJES", descripcion }) => {

    return (
        <div style={{ backgroundColor: '#111111', padding: '20px' }}>
        <br />  
            <h1 className="text-center" style={{ color: '#16a34a', fontFamily: 'titulo', marginBottom: '20px' }}>{titulo}</h1>
            <br />
            <div className="d-flex justify-content-center gap-3 flex-wrap align-items-stretch" style={{fontFamily:'titulo'}}>

                <CardsPersonajes 
                titulo="GORGE ROGERS" 
                descripcion="El macabro responsable de los rituales oscuros que despertaron fuerzas más 
                allá de la comprensión humana. Su obsesión por lo prohibido desató el horror en el museo." />

                <CardsPersonajes
                 titulo="STEPHEN JONES"
                descripcion="Un investigador decidido a probar que todo en el museo es una farsa. 
                Su escepticismo será puesto a prueba cuando enfrente horrores que desafían toda lógica." />

                <CardsPersonajes 
                titulo="RHAN-TEGOTH" 
                descripcion="El monstruo ancestral despertado por los rituales de Rogers. 
                Una entidad de poder incomprensible que emerge desde el abismo para reclamar lo que le pertenece." />      

                 <CardsPersonajes 
                titulo="ORABONA" 
                descripcion="Fiel y siniestro sirviente de Rogers. Ejecuta sus órdenes sin cuestionar,
                 moviéndose entre las sombras del museo como una extensión de la voluntad de su amo." />    
            </div>
        </div>
    );
}

