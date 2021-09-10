import React from 'react'
import { Link } from "react-router-dom"

export default function Sobre() {
    return (
        <section>
            <h1>Sobre</h1>
            <p>Meu nome é Matheus Feitosa Silva, sou estudante de análise e desenvolvimento de sistemas. Sou apaixonado por programação principalmente por POO com Java e busco estágio na área. </p>

            <Link to="/contatos">Contate agora</Link>
        </section>
    )
}
