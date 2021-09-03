import React, { useState } from 'react'

export default function Contato() {

    const [carro, setCarro] = useState({'marca':'','modelo':''})

    const mostraCarro = (e) => {
        const { name, value } = e.target;

        if(name === 'marca'){
            setCarro({ 'marca': value, 'modelo': carro.modelo })
        }
        else if(name === 'modelo'){
            setCarro({ 'marca': carro.marca, 'modelo': value })
        }
    }

    return(
        <div>
            <h2>Dados do Carro</h2>
            Marca: <input type="text" name="marca" onChange={ mostraCarro } />
            Modelo: <input type="text" name="modelo" onChange={ mostraCarro } />
            <p>Meu carro é um <span>{carro.marca}</span>-<span>{carro.modelo}</span></p>
        </div>
    )
}










/*{

    const [frase, setFrase] = useState('')
    return (
        <div>
            <h2>Frase</h2>
            Digite a Frase: <input name="marca" name="txtFrase" value={frase} onChange={(e) => setFrase(e.target.value)} /> <br/>
            <p>A frase é: <span>{frase}</span></p>
            <button onClick={() => setFrase('')}>Reset</button>
        </div>
    )
}
*/