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

/**
 *  Outra solução
 * 
 * import React, { useState } from 'react'

export default function Semaforo() {

    const [countdown, setCountdown] = useState(1)
    const [semaforo, setSemaforo] = useState('')

    const alteraSemaforo = () => {

        if (countdown == 1) {
            setSemaforo('red')
        }
        else if (countdown == 2) {
            setSemaforo('yellow')
        } else if (countdown == 3) {
            setSemaforo('green')
        } else {
            setCountdown(1)
            return
        }

        setCountdown(countdown + 1)

    }

    return (
        <section>
            <div id="farol">
                <h2 style={{ color: (countdown - 1) == 1 ? semaforo : 'black' }}>PARE</h2>
                <h2 style={{ color: (countdown - 1) == 2 ? semaforo : 'black' }}>ATENÇÃO</h2>
                <h2 style={{ color: (countdown - 1) == 3 ? semaforo : 'black' }}>SIGA</h2>
            </div>
            <button onClick={alteraSemaforo}>EXECUTAR</button>
        </section >
    )
}

 */