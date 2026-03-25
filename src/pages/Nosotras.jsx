import React from "react";
import { CardsNosotras} from "../components/CardsNosotras";

export const Nosotras = ({ titulo = "NUESTRO EQUIPO", descripcion }) => {
    return (
        <div style={{ backgroundColor: '#111111', padding: '20px' }}>
        <br />
            <h1 className="text-center mt-5" style={{ color: '#16a34a' }}>{titulo}</h1>
            <br />
            <div className="d-flex justify-content-center gap-3 flex-wrap text-center">
                <CardsNosotras titulo="Karol Usuga" 
                descripcion=" Lider en documentacion - Ilustradora gráfica" />  


                <CardsNosotras titulo="Sofía Amaya" 
                descripcion=" Lider en documentacion - Ilustradora gráfica" />

                <CardsNosotras titulo="Yamile Arias" 
                descripcion=" Lider en documentacion - Ilustradora gráfica" />

            </div>
        </div>
    );
}