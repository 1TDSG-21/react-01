import React from "react"
import './App.css'
import Corpo from "./components/corpo/Corpo"

export default function App() {

    const paragrafo = {
        fontSize: '2em',
        color: '#0000ff',
        fontFamily: 'Helvetica'
    }

    return (
        <div className="container">
            <h1 style={{ backgroundColor: '#ff0000', border: '3px solid yellow' }}>Conteúdo do App.JS</h1>
            <p style={paragrafo}>Estilizando com CSS IN - LINE NOVO MUNDO!</p>
            <Corpo />
        </div>
    )
}

