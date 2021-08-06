import React from 'react'
import dababy from '../../imagem/dababy.jpg';

export default function Carros(){
    return(
        <>
            <img src={dababy} alt="carrinho bacana" />

            <ul>
                <li>Relampago Marquinhos</li>
                <li>Fuscão preto</li>
                <li>Gol tunado</li>
                <li>Carreta furacão</li>
                <li>dababy car</li>
            </ul>
        </>
    );
}