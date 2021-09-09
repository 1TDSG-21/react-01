import React, {useState} from 'react'
import "./semaforo.css"


export default function Semaforo() {
    const [semaforoColor, setSemaforoColor] = useState("")
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
            <h2 className={sinal === "Pare" ? semaforoColor : ""}>Pare</h2>
            <h2 className={sinal === "Atenção" ? semaforoColor : ""}>Atenção</h2>
            <h2 className={sinal === "Siga" ? semaforoColor : ""}>Siga</h2>
            <button onClick={() => switchColor()}>Trocar</button>
        </div>
    )
}
