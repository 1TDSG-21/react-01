import React, {useState} from 'react'
import "./semaforo.css"


export default function Semaforo() {
    const [semaforoColor, setSemaforoColor] = useState("red")
    const [sinal, setSinal] = useState("Pare")

    const switchColor = () => {
        if (semaforoColor === "red") {
            setSemaforoColor("green")
            setSinal("Siga")
        } else if (semaforoColor === "green") {
            setSemaforoColor("yellow")
            setSinal("Atenção")
        } else {
            setSemaforoColor("red")
            setSinal("Pare")
        }
    }

    return (
        <div>
            <h2 className={semaforoColor}>{sinal}</h2>
            <button onClick={() => switchColor()}>Trocar</button>
        </div>
    )
}
