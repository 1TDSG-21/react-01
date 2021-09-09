import React from 'react'
import "./semaforo.css"


export default function Semaforo() {
    return (
        <div>
            <h2 className="red">Pare</h2>
            <h2 className="yellow">Atenção</h2>
            <h2 className="green">Siga</h2>
        </div>
    )
}
