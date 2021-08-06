import React from 'react';
import logo from '../img/carro.jpg'

export default function Carro()
{
    return(
        <>
        <img src = {logo} className = "carroImagem" alt = "Lamborghini"/>
        <ul>
            <li>Lamborghini Miura</li>
            <li>Lamborghini LM002</li>
            <li>Lamborghini Diablo</li>
            <li>Lamborghini Murcielago SV</li>
            <li>Lamborghini Veneno</li>
        </ul>
        </>
    );
}