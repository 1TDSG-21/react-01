import React from 'react'

export default function Item(props) {
    return (
        <div className="resultado">
            <p>Resultado da pesquisa : {props.valorResultado}</p>

            <button onClick={() => props.pesquisar()}>INCREMENTAR-NO-FILHO</button>
        </div>
    )
}
