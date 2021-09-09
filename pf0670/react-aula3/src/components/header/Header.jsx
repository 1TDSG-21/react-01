import React, { useState } from 'react'
import Demo from '../demo/Demo'
import Features from '../features/Features'
import Home from '../home/Home'
import Pricing from '../pricing/Pricing'
import Resource from '../resource/Resource'
import Itens from '../itens/Itens'
import Contato from '../contato/Contato'

export default function Header() {

    const [componente, setComponente] = useState(
        <Home>
            <div>
                Conteúdo enviado do Header.
            </div>
            <p>Essa é sua primeira Visita a nossa página!</p>
        </Home>

    )

    const data = new Date()


    return (
        <>

            <header>
                <nav>
                    <a href="#" onClick={() => setComponente(
                        <Home>
                            <div>
                                Conteúdo enviado do Header.
                            </div>
                            <p>Exemplos de Children.</p>
                            {
                                data.getHours() >= 9 ? <Itens /> : <span>Menos de 9</span>
                            }
                        </Home>
                    )}>Home</a> |

                    <a href="#" onClick={() => setComponente(<Features />)}>Features</a> |
                    <a href="#" onClick={() => setComponente(<Pricing />)}>Pricing</a> |
                    <a href="#" onClick={() => setComponente(<Demo />)}>Demo</a> |
                    <a href="#" onClick={() => setComponente(<Resource />)}>Resource</a> |
                    <a href="#" onClick={() => setComponente(<Contato />)}>Contato</a> |
                </nav>
            </header>

            <div>
                {componente}
            </div>
        </>
    )
}
