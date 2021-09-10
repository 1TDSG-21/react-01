import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Contato from '../contato/Contato'
import Imagens from '../imagens/Imagens'
import Servicos from '../servicos/Servicos'
import Topo from '../topo/Topo'

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul><li><Link to='/topo'>Início</Link></li></ul>
                    <ul><li><Link to='/servicos'>Serviços</Link></li></ul>
                    <ul><li><Link to='/img'>Imagens</Link></li></ul>
                    <ul><li><Link to='/contato'>Contato</Link></li></ul>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route path="/topo" component={Topo}/>
                    <Route path="/servicos" component={Servicos}/>
                    <Route path="/img" component={Imagens} />
                    <Route path="/contato" component={Contato}/>
                </Switch>
            </main>
        </div>
    )
}
