import React from 'react'

export default function Itens(props) {
    return (
        <>
            <a href="#">Início</a>
            {props.elHtml}
            <button onClick={() => props.alteraEl(<label>LABEL</label>)}>[USE STATE - EXTERNO]</button>
        </>
    )
}
