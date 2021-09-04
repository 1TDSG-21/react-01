import React, { useState } from 'react'

let lista = []


export default function Carro(){

    const [carro, setCarro] = useState('');

    const carros = () => {
            
        let lista_carro = document.getElementById('carros')
        lista.push(lista_carro.value)
        
        setCarro(lista)
    }

    return(
        <div>
            <h1>Carros</h1>
            Digite o nome do carro: <input type="text" id = "carros"/>
            <button onClick={carros}>Clique aqui!</button>
            <p>Carro recentemente colocado: <span><b>{carro}</b></span></p>
        </div>
    )
}