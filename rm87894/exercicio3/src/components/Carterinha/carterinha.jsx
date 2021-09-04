import React, { useState } from 'react'
import carrinho from '../img/dababy.jpg'
import GATO from '../img/unnamed.jpg'
import img_aleatoria from '../img/da1ef9eabd812582f07254caa30461a7.jpg'
import img_aleatoria2 from '../img/download.jpg'
import './carterinha.css'

export default function Carterinha() {
    const [carterinha, setCarterinha] = useState({ 'nome': '', 'rm': '', 'curso': '' , 'turma': ''})

    const newCarterinha = (e) => {
        const { name, value } = e.target;
        
        if (name == 'nome') {
            setCarterinha({ 'nome': value, 'rm': carterinha.rm, 'curso': carterinha.curso, 'turma': carterinha.turma})
        } 
        
        if (name == 'rm') {
            setCarterinha({ 'nome': carterinha.nome, 'rm': value, 'curso': carterinha.curso, 'turma': carterinha.turma })
        } 
        
        if (name == 'curso') {
            setCarterinha({ 'nome': carterinha.nome, 'rm': carterinha.rm, 'curso': value, 'turma': carterinha.turma })
        }

        if (name == 'turma') {
            setCarterinha({ 'nome': carterinha.nome, 'rm': carterinha.rm, 'curso': carterinha.curso, 'turma': value })
        }

    }
    return (
        <div>
            <p/>

            <img src={carrinho} alt="dababy" className='a'/>
            <h1>Nome: Fernando</h1>
            <h1>Rm: 6969</h1>
            <h1>Curso: youtuber</h1>
            <h1>Turma: A</h1>
            
            <p/>

            <img src={GATO} alt="gato" className='b'/>
            <h1>Nome: Joãozinho</h1>
            <h1>Rm: 666</h1>
            <h1>Curso: Gastromia</h1>
            <h1>Turma: B</h1>
            
            <p/>

            <img src={img_aleatoria} alt="bicho" className='c'/>
            <h1>Nome: Maria</h1>
            <h1>Rm: 8000</h1>
            <h1>Curso: Administração</h1>
            <h1>Turma: C</h1>
            
            <p/>

            <img src={img_aleatoria2} alt="seila" className='d'/>
            <h1>Nome: <span>{carterinha.nome}</span></h1>
            <h1>Rm: <span>{carterinha.rm}</span></h1>
            <h1>Curso: <span>{carterinha.curso}</span></h1>
            <h1>Turma: <span>{carterinha.turma}</span></h1>

            <p/>

            Nome : <input type="nome" name="nome" onChange={newCarterinha} /><p/>

            Rm: <input type="rm" name="rm" onChange={newCarterinha} /><p/>

            Curso: <input type="curso" name="curso" onChange={newCarterinha} /><p/>

            Turma: <input type="turma" name="turma" onChange={newCarterinha} /><p/>
        </div>
    )
}