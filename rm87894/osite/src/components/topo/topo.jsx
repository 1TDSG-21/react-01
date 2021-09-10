import React from "react"
import { Link } from 'react-router-dom'

export default function Topo() {
    return(

        <header>
            <h1>Aluno da FIAP</h1>
            <p>
                Sou estudante da FIAP, comecei a cursar a faculdade nesse ano.<br />
               Estou estudando de tudo um pouco, e está sendo muito prazero aprender sobre programação<br />
               pois é uma área que gosto muito e me desperta curiosidade.<br />
               </p>
               <Link to='/serviços'>Ver Mais</Link>
        </header>

    )
}