import React, { useState } from 'react'

export default function Contato() {

    const [carro, setcarro] = useState({'marca':'', 'modelo':''})
    return (
        <div>
            <h2>Dados do Carro</h2>
            Marca: <input name="marca" /> <br/>
            Modelo: <input name="modelo" /> <br/>
        </div>
    )
}
