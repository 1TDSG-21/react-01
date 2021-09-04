import React, { useState } from 'react'
import './Semafaro.css'
var i = 0
export default function Semafaro() {

    const [semafaro, setSemafaro] = useState('')
    
    const trcNm = () => {
        i += 1
        if (i == 1) {
            setSemafaro(<h2 id="verde">Siga</h2>)
        }
        if (i == 2) {
            setSemafaro(<h2 id="amarelo">Atenção</h2>)
        }
        if (i == 3) {
            setSemafaro(<h2 id="vermelho">Pare</h2>)
        }
        if(i==4){
            i = 0
        }

    }

    return (
        <div>
            <button onClick={trcNm}>Clica ai</button>
            <br /> <br />
            {semafaro}
        </div>
    )
}
