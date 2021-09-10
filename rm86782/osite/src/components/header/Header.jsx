import React from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Contatos from '../contatos/Contatos'
import Imagens from '../imagens/Imagens'
import Servicos from '../servicos/Servicos'
import Sobre from '../sobre/Sobre'
import Topo from '../topo/Topo'

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/topo">Topo</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/imagens">Imagens</Link></li>
                        <li><Link to="/contatos">Contato</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Switch>
                    <Route path="/topo" component={Topo} />
                    <Route path="/sobre" component={Sobre} />
                    <Route path="/servicos" component={Servicos} />
                    <Route path="/imagens" component={Imagens} />
                    <Route path="/contatos" component={Contatos} />
                </Switch>
            </main>
        </div>
    )
}
