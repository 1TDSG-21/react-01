import React from 'react'
import "./App.css";
import Corpo from './components/corpo/Corpo';

export default function App() {
    const paragrafo = {
        fontSize: "2em",
        color: "#0000ff",
        fontFamily: "Heveltica"
    }

    return (
        <div className="container">
            <h1 style={{ backgroundColor: "#ff0000", border: "3px solid yellow" }}>Conteúdo gerado no App.jsx</h1>
            <p style={paragrafo}>Estilizando com CSS inline - Novo Mundo!</p>
            <Corpo/>
        </div>
    )
}
