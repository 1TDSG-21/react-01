import React from "react";
import carroProblema from "../../img/carroProblema.jpg";
import "./style.css";

export default function Carros(props) {
    // Componente filho
    return(
        <section className="card">
            <h2 className="card-title">{props.nmLista}</h2>
            <img className="card-img" src={carroProblema} alt="Carro mais problemático do Brasil"/>
            <ul className="lista-carros">
                <li>{props.carrosAtrib[0]}</li>
                <li>{props.carrosAtrib[1]}</li>
                <li>{props.carrosAtrib[2]}</li>
                <li>{props.carrosAtrib[3]}</li>
                <li>{props.carrosAtrib[4]}</li>
            </ul>
        </section>
    );
}