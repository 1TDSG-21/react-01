import React from 'react'
import "./carteirinha.css"

export default function Carteirinha(props) {
    return (
        <div className="carteirinha">
            <div className="foto">
                <img src={props.imgCarteirinha} alt="Foto da carteirinha" />
            </div>
            <div className="conteudo">
                <h1>Nome: {props.nome}</h1>
                <h2>RM: {props.rm}</h2>
                <p>{props.curso} | Turma: {props.turma}</p>
            </div>

        </div>
    )
}
