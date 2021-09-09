import React, { useState } from 'react'
import imgLogoReact from '../img/logo192.png'
import Itens from '../itens/Itens'
import Lista from '../lista/Lista'
import './Corpo.css'

export default function Corpo() {

    //Criando a declaração de um State para alterar o conteúdo de uma constante.
    const [aluno, setAluno] = useState("Feitosa")

    const [elemento, setElemento] = useState(<p>TEXTO</p>)

    return (
        <section>
            <h2>Se está aprendendo REACT - A imagem abaixo diz Tudo !!!</h2>
            <img src={imgLogoReact} alt="Logo do React" />
            <div>
                <p>Porque REACT é : </p>
                <p>EASY!</p>
                <p>FAST!</p>
                <p>ACESSIBLE!</p>
            </div>

            <div className="exemplos">
                <p>Exemplo de STATE</p>
                <p>Nome aluno : {aluno}</p>
                <button onClick={() => setAluno("Wesley")} onDoubleClick={() => setAluno("Cruz")}>Alterar</button>
            </div>
            <Lista />

            <div className="exercicio">

                <div>
                    {elemento}
                </div>

                <Itens elHtml={elemento} alteraEl={setElemento} />
                <button onClick={() => setElemento(<em>TEXTO COM EM</em>)}>ALTERAR-VALOR-[USE STATE]</button>
            </div>

        </section>
    )
}
