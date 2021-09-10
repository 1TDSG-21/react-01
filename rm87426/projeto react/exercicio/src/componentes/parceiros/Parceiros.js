import React from 'react';

export default function Parceiros(props)
{
    let n1 = 10;
    let n2 = 15;

    return(
        <>
        <h2>Parceiros</h2>

        <span>Resultado da multiplicação: {props.multiplicacao(n1, n2)}</span>

        <p><a href = "https://www.fiap.com.br/">FIAP</a></p>
        <p><a href = "https://www.fiap.com.br/">FIAP</a></p>
        <p><a href = "https://www.fiap.com.br/">FIAP</a></p>
        <p><a href = "https://www.fiap.com.br/">FIAP</a></p>
        </>
    )
}