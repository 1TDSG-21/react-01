import React from "react"
import { Switch, Route, Link } from 'react-router-dom'
import Contato from "../contanto/contato"
import Imagens from "../imagens/imagens"
import Servicos from "../servicos/servicos"
import Sobre from "../sobre/sobre"
import Topo from "../topo/topo"

export default function Header() {
    return(
    <div>
        <header>
            <nav>
                <ul><li><Link to='/'>Início</Link></li></ul>
                <ul><li><Link to='/topo'>Topo</Link></li></ul>
                <ul><li><Link to='/sobre'>Sobre</Link></li></ul>
                <ul><li><Link to='/contato'>Contato</Link></li></ul>
                <ul><li><Link to='/serviços'>Serviços</Link></li></ul>
                <ul><li><Link to='/imagens'>Imagens</Link></li></ul>
            </nav>
        </header>

        <main>
            <Switch>
                <Route path= '/serviços' component={Servicos}/>
                <Route path= '/contato' component={Contato}/>
                <Route path= '/imagens' component={Imagens}/>
                <Route path= '/sobre' component={Sobre}/>
                <Route path= '/topo' component={Topo}/>
            </Switch>
        </main>    
    </div>
    )
}