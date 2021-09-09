import React from 'react';
import "./App.css"
import imgPerfil from "./img/imgPerfil.jpg"
import Carros from './components/carros/Carros';
import Carteirinha from './components/carteirinha/Carteirinha';
import Semaforo from './components/semaforo/Semaforo';

function App() {
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
    </div>
  );
}

export default App;
