import React from 'react'
import Header from './components/cabecalho/Header'
import Corpo from './components/corpo/Corpo'
import Footer from './components/rodape/Footer'
import './App.css'

export default function App() {
    return (
        <>
        <div className="container">
            <Header/>
            <Corpo/>
            <Footer/>
        </div>
        </>
    )
}
