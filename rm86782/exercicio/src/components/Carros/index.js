import React from "react";
import carroProblema from "../../img/carroProblema.jpg";
import "./style.css";

export default function Carros(props) {
    const lista = props.carrosAtrib.map((e, i) => {
        return <li key={i}>{e}</li>
    })



    // Componente filho
    return(
        <section className="card">
            <h2 className="card-title">{props.nmLista}</h2>
            <img className="card-img" src={carroProblema} alt="Carro mais problemático do Brasil"/>
            <ul className="lista-carros">
                {lista}
            </ul>
        </section>
    );
}