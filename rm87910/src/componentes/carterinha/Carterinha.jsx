/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import ft1 from '../../img/ft1.jpg'
import './Cart.css'

export default function Carterinha() {
    const [aluno, setAluno] = useState({ 'nome': '', 'rm': '', 'curso': '' })

    const attAluno = (e) => {
        const { name, value } = e.target;
        if (name == 'nome') {
            setAluno({ 'nome': value, 'rm': aluno.rm, 'curso': aluno.curso })
        } if (name == 'rm') {
            setAluno({ 'nome': aluno.nome, 'rm': value, 'curso': aluno.curso })
        } if (name == 'curso') {
            setAluno({ 'nome': aluno.nome, 'rm': aluno.rm, 'curso': value })
        }
    }
    return (
        <div>
            <img src={ft1} alt="ft1" />
            <h1>NOME: aluno1</h1>
            <h1>RM  : 001</h1>
            <h1>Curso: 1TDSG</h1>
            <br />

            <img src={ft1} alt="ft1" />
            <h1>NOME: aluno2</h1>
            <h1>RM  : 001</h1>
            <h1>Curso: 1TDSG</h1>
            <br />

            <img src={ft1} alt="ft1" />
            <h1>NOME: aluno3</h1>
            <h1>RM  : 001</h1>
            <h1>Curso: 1TDSG</h1>
            <br />

            <img src={ft1} alt="ft1" />
            <h1>NOME: <span>{aluno.nome}</span></h1>
            <h1>RM: <span>{aluno.rm}</span></h1>
            <h1>Curso: <span>{aluno.curso}</span></h1>
            <br />

            Nome  : <input type="nome" name="nome" onChange={attAluno} /> <br />
            RM : <input type="rm" name="rm" onChange={attAluno} /> <br />
            Curso : <input type="curso" name="curso" onChange={attAluno} /> <br />

        </div>
    )
}
