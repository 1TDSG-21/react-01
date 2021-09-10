import React from 'react';
import Carros from '../carro/Carro'
import Parceiros from '../parceiros/Parceiros';

export default function Cabecalho()
{
    // crição de lista de carros para enviar ao componente carro
    //utilização do comando props para recuperar estas infos nos componentes filhos
    const listaCarros = ['Megane','Duster','Clio','Laguna', 'Sandero']

    //enviando atributo simples para o filho
    //let nomeLista = 'MINHA-LISTA

    //criando uma funçao para editar o nome da lista
    const alteraNmLista = (nome) => 'NOVO NOME LISTA ' + nome

    const multiplicaNumero = (n1, n2) => n1 * n2
    return(
        <header className="App-header">
            <h1>Vai Corinthians!!!</h1>
            <p>Matheus Sanches Barreiros - React JS</p>
            <Carros carrosAttrib={listaCarros} alteraNome = {alteraNmLista}/>
            <Parceiros multiplicacao = {multiplicaNumero}/>
        </header>
    )
}