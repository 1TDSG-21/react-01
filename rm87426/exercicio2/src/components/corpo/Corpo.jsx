import React, { useState } from 'react'
import capa_adesivos from '../../capa_adesivos.jpg'
import Lista from '../../../lista/Lista'
import './Corpo.css'

export default function Corpo() {
    const [aluno, setAluno] = useState("Matheus")
    return (
        <>
        <section className="corpo">
            <h3>Isto é um subtitulo</h3>
            <img src={capa_adesivos} alt="capa com adesivos" />

            <div>
            <p>Vai Corinthians!</p>
            <p>FIAP</p>
            <p>Matheus Sanches</p>
            <p>React.js</p>
            </div>

            <div>
                <p>Exemplo de STATE</p>
                <p>Nome aluno: {aluno}</p>
                <button onClick={() => setAluno("Sanches")} onDoubleClick = {() => setAluno("Barreiros")}>Alterar</button>
            </div>

            <Lista/>

        </section>
        </>
    )
}
