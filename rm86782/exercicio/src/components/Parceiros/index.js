import React from "react";

export default function Parceiros(props) {
    const firstNum = 5
    const secondNum = 2

    return(
        <>
            <h2>Link das marcas</h2>
            <span>Multiplicador: {props.multiplicador(firstNum, secondNum)}</span>
            <p><a href="https://www.fiat.com.br/" target="_blank" rel="noreferrer">Fiat</a></p>
            <p><a href="https://carros.peugeot.com.br/" target="_blank" rel="noreferrer">Peugeot</a></p>
            <p><a href="https://www.ford.com.br/" target="_blank" rel="noreferrer">Ford</a></p>
            <p><a href="https://caoachery.com.br/" target="_blank" rel="noreferrer">CaoaCherry</a></p>
        </>
    );
}