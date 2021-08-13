import React from "react";
import carroProblema from "../../img/carroProblema.jpg";

export default function Carros(props) {
    // Componente filho
    return(
        <>
            <h2>{props.nmLista}</h2>
            <img src={carroProblema} alt="Carro mais problemático do Brasil"/>
            <ul>
                <li>{props.carrosAtrib[0]}</li>
                <li>{props.carrosAtrib[1]}</li>
                <li>{props.carrosAtrib[2]}</li>
                <li>{props.carrosAtrib[3]}</li>
                <li>{props.carrosAtrib[4]}</li>
            </ul>
        </>
    );
}