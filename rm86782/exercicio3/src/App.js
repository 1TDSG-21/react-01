import React, {useState} from 'react';
import "./App.css"
import imgPerfil from "./img/imgPerfil.jpg"
import Carros from './components/carros/Carros';
import Carteirinha from './components/carteirinha/Carteirinha';
import Semaforo from './components/semaforo/Semaforo';

function App() {
  const [nome, setNome] = useState("")
  const [rm, setRm] = useState("")
  const [curso, setCurso] = useState("")
  const [turma, setTurma] = useState("")

  return (
    <div className="App">
      <h1>Matheus Feitosa Silva | RM86782 | TDSG manhã</h1>
      <Semaforo/>
      <br/>
      <Carros>
        <li>Opala</li>
        <li>Camaro</li>
        <li>Fiat toro</li>
        <li>Chevete</li>
        <li>Jeep</li>
        <li>Porsh</li>
        <li>Saveiro</li>
        <li>Hilux</li>
        <li>Corola</li>
        <li>Brasilia</li>
      </Carros>
      <br/>
      <Carteirinha imgCarteirinha={imgPerfil} nome="Matheus Feitosa Silva" rm="86782" curso="Análise e desenvolvimento de sistemas" turma="1TDSG manhã"/>
      <Carteirinha imgCarteirinha={imgPerfil} nome="Naruto Uzumaki" rm="86852" curso="Academia Ninja da folha" turma="1TANF manhã"/>
      <Carteirinha imgCarteirinha={imgPerfil} nome="Zoio" rm="88882" curso="Curso de trolagem" turma="1CDTG manhã"/>
      <br/>
      <h1>Crie sua carteirinha</h1>
      <div className="formulario">
        <label>Digite seu nome: </label>
        <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} /><br/>
        <label>Digite seu rm: </label>
        <input type="text" name="rm" id="rm" value={rm} onChange={(e) => setRm(e.target.value)} /><br/>
        <label>Digite seu curso: </label>
        <input type="text" name="curso" id="curso" value={curso} onChange={(e) => setCurso(e.target.value)} /><br/>  
        <label>Digite seu turma: </label>
        <input type="text" name="turma" id="turma" value={turma} onChange={(e) => setTurma(e.target.value)} />
      </div>
      <Carteirinha imgCarteirinha={imgPerfil} nome={nome} rm={rm} curso={curso} turma={turma}/>
    </div>
  );
}

export default App;
