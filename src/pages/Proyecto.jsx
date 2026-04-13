import React from "react";
import { CardProyecto } from "../components/CardProyecto";


export const Proyecto = ({ titulo = "NUESTRO PROYECTO", descripcion = "Crear una experiencia narrativa inmersiva que acerque a los lectores al universo de H.P. Lovecraft a través de un cómic interactivo donde cada decisión importa." }) => {
    return (
        <div id="proyecto" style={{ backgroundColor: '#111111', padding: '20px', fontFamily: 'titulo', minHeight: '100vh' }}>
            <br />
            <h1 className="text-center mt-5" style={{ color: '#16a34a', marginBottom: '20px' }}>{titulo}</h1>
            <br />

            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4 align-items-stretch">

                <CardProyecto
                    titulo="PROPÓSITO"
                    descripcion={descripcion}
                />

                <CardProyecto
                    titulo="MISIÓN"
                    descripcion="Desarrollar un cómic interactivo de
                    horror cósmico que combine arte visual, narrativa envolvente y 
                    tecnología, ofreciendo una experiencia única e inolvidable en el museo
                    de Lovecraft."
                />

                <CardProyecto
                    titulo="VISIÓN"
                    descripcion="Ser un referente en la creación de 
                    cómics interactivos de terror, innovando en la forma de contar historias 
                    y conectando a nuevas generaciones con el legado del horror lovecraftiano." 
                />
                
            </div>
        </div>
    );
}