import React from 'react'
import imgLogoReact from '../img/logo192.png'
import './Corpo.css'

export default function Corpo() {
    return (
        <section>
            <h2>Se está aprendendo REACT - A imagem abaixo diz Tudo !!!</h2>
            <img src={imgLogoReact} alt="Logo do React" />
            <div>
                <p>Porque REACT é : </p>
                <p>EASY!</p>
                <p>FAST!</p>
                <p>ACESSIBLE!</p>
            </div>
        </section>
    )
}
