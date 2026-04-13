import React, { useState } from "react";
import "../style/css.css";

const Juego = () => {
    const [correctDoor, setCorrectDoor] = useState(() => Math.ceil(Math.random() * 3));
    const [selectedDoor, setSelectedDoor] = useState(null);
    const [result, setResult] = useState(null);
    const [attempts, setAttempts] = useState(0);

    const pickDoor = (door) => {
        if (result) return;
        setSelectedDoor(door);
        setAttempts((value) => value + 1);

        if (door === correctDoor) {
            setResult("victoria");
        } else {
            setResult("derrota");
        }
    };

    const restart = () => {
        setCorrectDoor(Math.ceil(Math.random() * 3));
        setSelectedDoor(null);
        setResult(null);
        setAttempts(0);
    };

    return (
        <div id="juego" style={{ backgroundColor: '#111111', padding: '50px 20px', minHeight: '100vh', textAlign: 'center' }}>
            <div className="container text-center py-5">
                <h1 style={{ color: "#16a34a", fontFamily: "titulo", marginBottom: "1rem" }}>
                 ESCAPA DEL MUSEO
                </h1>
                <br />
                <br />
                <p style={{ color: "white", fontFamily: "parrafos", fontSize: "1.2rem" }}>
                    Elige una de las tres puertas del museo maldito.</p>
                    <p style={{ color: "white", fontFamily: "parrafos", fontSize: "1.2rem" }}> 
                        Solo una puerta te guía hacia el Grimorio .</p>

                <div className="row justify-content-center mt-4">
                    {[1, 2, 3].map((door) => (
                        <div key={door} className="col-12 col-md-4 mb-3">
                            <button
                                type="button"
                                className="btn btn-lg w-100"
                                style={{
                                    backgroundColor: selectedDoor === door ? "#155724" : "#16a34a",
                                    borderColor: "#16a34a",
                                    fontFamily: "titulo",
                                }}
                                onClick={() => pickDoor(door)}
                            >
                                PUERTA {door}
                            </button>
                        </div>
                    ))}
                </div>

                {result && (
                    <div className="mt-4 p-4 rounded" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                        <h2 style={{ color: result === "victoria" ? "#16a34a" : "#e3342f" }}>
                            {result === "victoria" ? "¡Has encontrado el Grimorio!" : "Has caído en una trampa infernal..."}
                        </h2>
                        <p style={{ color: "white", fontFamily: "parrafos" }}>
                            {result === "victoria"
                                ? `Seleccionaste la puerta ${selectedDoor} y escapaste del museo.`
                                : `La puerta ${selectedDoor} te llevó a un pasillo maldito. Intenta de nuevo.`}
                        </p>
                        <p style={{ color: "white", fontFamily: "parrafos" }}>Intentos: {attempts}</p>
                        <button type="button" className="btn btn-secondary" onClick={restart}>
                            Reiniciar juego
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Juego;
