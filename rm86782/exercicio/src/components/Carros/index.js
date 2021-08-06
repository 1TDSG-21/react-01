import React from "react";
import carroProblema from "../../img/carroProblema.jpg";

export default function Carros() {
    return(
        <>
            <img src={carroProblema} alt="Carro mais problemático do Brasil"/>
            <ul>
                <li>Fiat Palio</li>
                <li>Peugeot 207</li>
                <li>Ford New Fiesta</li>
                <li>Fiat Idea.</li>
                <li>Chery QQ</li>
            </ul>
        </>
    );
}