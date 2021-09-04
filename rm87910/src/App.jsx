/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import Header from './componentes/header/Header'
import Carros from './componentes/carro/Carro'
import './App.css'
import Cart from './componentes/carterinha/Carterinha'


export default function App() {



    return (
        <div className="container">
            <Header />
            <Carros />
            <Cart />
        </div>
    )
}