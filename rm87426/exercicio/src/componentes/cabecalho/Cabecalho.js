import React from 'react';
import Imagem from '../carro/Carro'
import Parceiros from '../parceiros/Parceiros';

export default function Cabecalho()
{
    return(
        <header className="App-header">
            <h1>Vai Corinthians!!!</h1>
            <p>Matheus Sanches Barreiros - React JS</p>
            <Imagem/>
            <Parceiros/>
        </header>
    )
}