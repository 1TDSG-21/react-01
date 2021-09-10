import React, { useState } from 'react'

export default function Contato() {

    const [frase, setFrase] = useState('')
    return (
        <div>
            <h2>Frase</h2>
            Digite a Frase: <input name="marca" name="txtFrase" value={frase} onChange={(e) => setFrase(e.target.value)} /> <br/>
            <p>A frase é: <span>{frase}</span></p>
        </div>
    )
}
