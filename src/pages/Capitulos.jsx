import React from "react";
import { CardsCapitulos } from "../components/CardsCapitulos";

export const Capitulos = ({ titulo = "VISTA PREVIA DE CAPITULOS" }) => {
    return (
        <div style={{ backgroundColor: '#111111', padding: '50px 20px', minHeight: '100vh', textAlign: 'center' }}>
            <h1 style={{ color: '#16a34a', marginBottom: '40px' }}>{titulo}</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>

                <CardsCapitulos
                    titulo="Capitulo 1: El Grimorio de los Susurros"
                    descripcion="Un visitante nocturno cruza el umbral del museo. Las puertas se cierran tras él con 
                    un eco que resuena por los pasillos vacíos. El aire huele a antiguo, a polvo y a algo más... 
                    algo que no debería existir."
                />

                <CardsCapitulos
                    titulo="Capitulo 2: El Artefacto"
                    descripcion="Una reliquia antigua despierta fuerzas incomprensibles. 
                    Tras la vitrina, una luz verdosa pulsa como un corazón latente. Quien la toque,
                     jamás volverá a ser el mismo."
                />

                <CardsCapitulos
                    titulo="Capitulo 3: El Guardián"
                    descripcion="Alguien—o algo—vigila desde las sombras. Una figura encapuchada recita
                     palabras de un idioma olvidado. El libro que sostiene contiene verdades que la mente 
                     humana no puede soportar."
                />


                <CardsCapitulos
                    titulo="Capitulo 4: El Ritual"
                    descripcion="Un círculo de símbolos ancestrales brilla en el suelo de la sala principal.
                    Las paredes susurran cánticos en lenguas muertas. Quien se atreva a pisar el círculo, 
                    despertará algo que lleva siglos dormido."
                />

                <CardsCapitulos
                    titulo="Capitulo 5: El Despertar"
                    descripcion="El portal se abre y una entidad cósmica emerge desde el abismo. 
                    Tentáculos de oscuridad envuelven el museo mientras el visitante enfrenta la 
                    verdad final: algunos horrores no pueden ser olvidados."
                />

            </div>
        </div>
    );
};