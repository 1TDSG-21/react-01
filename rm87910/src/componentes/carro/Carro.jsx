import React, { useState } from 'react'

let c = []

export default function Carro() {

    const [carro, setCarro] = useState('')
    const Carros = () => {
        
        let b = document.getElementById('marca')
        c.push(b.value)
        setCarro(c)
    }

    return (
        <div>
            Marca do carro  : <input id="marca" type="text" /> <br />
            <button onClick={Carros}>Clica ai</button>
            Carro adicionado recentemente: <span>{carro}</span>
        </div>
    )
}
