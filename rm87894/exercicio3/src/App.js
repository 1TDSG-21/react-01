import React from 'react'
import Semaforo from './components/Semaforo/semaforo'
import Carro from './components/carros/carros'
import Carterinha from './components/Carterinha/carterinha'


const App = () =>{
    return(
        <div className= 'container'>
              <h1>RM87894 - TDSG</h1>
              <Semaforo />
              <Carro />
              <Carterinha />       
        </div>

    )
}

export default App