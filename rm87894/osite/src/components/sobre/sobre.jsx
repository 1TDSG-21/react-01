import React from 'react'
import { Link } from 'react-router-dom'

export default function Sobre() {
    return(

        <section>
            <h2>Sobre</h2>
            <p>
                Meu nome é João Pedro, sou aluno da FIAP e estou no meu primeiro ano da faculdade.<br />
                A área que estou cursando é otíma para quem quer adentrar no mercado com facilidade,<br />
                pois a disponibilidade e a gama de empregos relacionados a TI é imensa e sempre em constante<br />
                crescimento. Além da facilidade na busca por emprego é algo que eu gosto muito, pois desde criança<br />
                sou fascinado por computadores e jogos de videogame, oque instiga minha curiosidade em programação.
            </p>
            <Link to='/contato'>ME CONTRATE!</Link>
        </section>

    )
}