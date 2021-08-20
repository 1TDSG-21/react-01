import React from 'react'
import imgBase from '../img/carro-base.jpg'

//COMPONENTE FILHO


export default function Carros(props) {
    const novoNome = 'CARROS'
    
    const lista = props.carrosAttrib.map(
      (c,i)=>
      <li key={i}>{i+1} - {c}</li>
    )

   return(
      <>
        <img src={imgBase} alt="Não é um carro é um MONSTRO!!" />
        
        <h2>{props.alteraNome(novoNome)}</h2>

        <ul>
          {lista}
          {/*
            <li>{props.carrosAttrib[0]}</li>
            <li>{props.carrosAttrib[1]}</li>
            <li>{props.carrosAttrib[2]}</li>
            <li>{props.carrosAttrib[3]}</li>
            <li>{props.carrosAttrib[4]}</li>
          */}
        </ul>
      </>
)}