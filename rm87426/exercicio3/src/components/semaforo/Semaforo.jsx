import React, { useState } from 'react'

export default function Semaforo() {

    const [semaforo, setSemaforo] = useState("Siga - Verde")

    const nextState = () => {
        switch(semaforo){
            case("Siga - Verde"):
                return "Atenção - Amarelo"
            case("Atenção - Amarelo"):
                return "Pare - Vermelho"
            case("Pare - Vermelho"):
                return "Siga - Verde"
        }
        
    }
    return (
        <div>
            <h2>Semaforo: {semaforo}</h2>
            <button onClick={() => setSemaforo(nextState())}>Semaforo</button>
        </div>
    )
}
