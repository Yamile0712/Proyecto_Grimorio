import React from "react"
import "./Footer.css"

export const Footer = () => {
    return (
        <>

            <footer className="footer-grimorio">
                <div className="footer-content" >
                    <h2 className="footer-title" style={{fontFamily:'titulo'}}>GRIMORIO</h2>
                    <br />
                    <p className="footer-subtitle" style={{fontFamily:'parrafos'}}>
                        Basado en "El Horror en el Museo" de H.P. Lovecraft
                    </p>
                    <p className="footer-subtitle" style={{fontFamily:'parrafos'}} > Cómic Interactivo</p>
                    <a href="https://instagram.com" class="social-icon" target="_blank">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">

                            <rect x="2" y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5">

                            </rect>
                            
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>

                            <line x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5">
                            </line>
                        </svg>
                    </a>
                </div>
            </footer>

        </>
    )
};