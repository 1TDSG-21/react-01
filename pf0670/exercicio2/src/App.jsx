import React from 'react'
import './App.css'
import Corpo from './components/corpo/Corpo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

const App = () => {
    return (
        <div className="container">
            <h1>COMPONENTE PRINCIPAL</h1>
            <Header />
            <Corpo />
            <Footer />
        </div>
    )
}

export default App