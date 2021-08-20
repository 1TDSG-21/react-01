import React from 'react'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carros from './components/carros/Carros'
import Parceiros from './components/parceiros/Parceiros'

//COMPONENTE PAI

export default function App() {

  //Criando uma lista(vetor/array) de carros para enviar ao Componente Carro
  // utilizamos props para conseguir recuperar estas informações nos componentes filhos.
  const listaDeCarros = ['Verona','Veraneio','Elba','Miura','Gurgel']

  //Enviando atributo simples para o filho
  //let nomeLista = 'MINHA-LISTA'

  //Criando uma função para editar o nome da lista!!!
  const alteraNmLista = (nome)=> 'NOVO NOME LISTA ' + nome
  const multiplicacao = (n1,n2)=> n1*n2

   return(
      
    <div>
      <Cabecalho/>
      <Carros carrosAttrib={listaDeCarros} alteraNome={alteraNmLista}/>
      <Parceiros calculo={multiplicacao}/>
    </div>
)}