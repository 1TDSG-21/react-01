import React, { useState } from 'react'
import foto from '../img/matheus.jpg'
import './Carteirinha.css'

export default function Carteirinha() {

    const [aluno, setAluno] = useState({'nome': '', 'rm': '', 'curso': ''})
    const alunos = (e) => {
        const {name, value} = e.target;
        if (name == 'nome') {
            setAluno({ 'nome': value, 'rm': aluno.rm, 'curso': aluno.curso })
        } if (name == 'rm') {
            setAluno({ 'nome': aluno.nome, 'rm': value, 'curso': aluno.curso })
        } if (name == 'curso') {
            setAluno({ 'nome': aluno.nome, 'rm': aluno.rm, 'curso': value })
        }
    }

    return (
        <div className="div-container">
            <img src={foto} alt="estudante" />
            <h1>NOME: Matheus</h1>
            <h1>RM  : 1</h1>
            <h1>Curso: 1TDSG</h1>
            <br />

            <img src={foto} alt="estudante" />
            <h1>NOME: Sanches</h1>
            <h1>RM  : 2</h1>
            <h1>Curso: 1TDSG</h1>
            <br />

            <img src={foto} alt="estudante" />
            <h1>NOME: Barreiros</h1>
            <h1>RM  : 3</h1>
            <h1>Curso: 1TDSG</h1>
            <br />

            <img src={foto} alt="estudante" />
            <h1>NOME: <span>{aluno.nome}</span></h1>
            <h1>RM: <span>{aluno.rm}</span></h1>
            <h1>Curso: <span>{aluno.curso}</span></h1>
            <br />

            Nome  : <input type="nome" name="nome" onChange={alunos} /> <br />
            RM : <input type="rm" name="rm" onChange={alunos} /> <br />
            Curso : <input type="curso" name="curso" onChange={alunos} /> <br />
        </div>
    )
}
