import React from 'react';
import "./App.css"
import Carros from './components/carros/Carros';
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
    </div>
  );
}

export default App;
