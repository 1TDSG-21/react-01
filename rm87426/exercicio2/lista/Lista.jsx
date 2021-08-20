import React, { useState } from 'react'
import Item from '../src/components/item/Item'

export default function Lista() {

    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5

    const aumentar = () => {
        setValorState(valorState + 5)
        valorVariavel += 5
    }

    return (
        <div>
            Qual curso tem mais adeptos?
            <ul>
                <li>Java : {valorState}</li>
                <li>JavaScript : {valorVariavel}</li>
                <li>Python</li>
                <li>C#</li>
            </ul>
            <button onClick={() => aumentar()}>INCREMENTAR</button>
            
            <div>
                <Item valorResultado = {valorState} pesquisar={aumentar}/>
            </div>
        </div>
    )
}
