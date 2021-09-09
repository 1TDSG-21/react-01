import React, { useState } from 'react'
import Item from '../item/Item'

export default function Lista() {

    //Exemplo da diferença entre variável e constante com State.
    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5

    const aumentar = () => {
        setValorState(valorState + 5)
        valorVariavel += 5
    }

    return (
        <div>
            Qual curso Tem mais adéptos?
            <ul>
                <li>Java : {valorState}</li>
                <li>javascript : {valorVariavel}</li>
                <li>Python</li>
                <li>C#</li>
            </ul>
            <button onClick={() => aumentar()}>INCREMENTAR</button>

            <div>
                <Item valorResultado={valorState} pesquisar={aumentar} />
            </div>
        </div>

    )
}
