import React, {useState} from 'react';
import "./Corpo.css";

export default function Corpo() {

    // Criando declaração de um state para alterar o conteúdo de uma constante
    const [aluno, setAluno] = useState("Feitosa")
    return (
        <section className="sec-1">
            <p>Componente estilizado pelo pai</p>
            <div className="exemplos">
                <p>Exemplo de state!</p>
                <p>Nome do aluno: {aluno}</p>
                <button onClick={() => setAluno("Matheus Feitosa Silva")}>novo nome</button>
            </div>
        </section>
    )
}
