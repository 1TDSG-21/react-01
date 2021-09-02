import React, { useState } from 'react'
import Home from '../home/Home'
import Features from '../features/Features'
import Pricing from '../pricing/Pricing'
import Demo from '../demo/Demo'
import Resource from '../resource/Resource'
import  './Header.css'

export default function Header() {

    const [componente, setComponente] = useState(
        <Home>
            <div>
                Conteúdo enviado do Header.
            </div>
            <p>Exemplos de Children.</p>
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
                                data.getHours() >= 9 ? <span>Mais de 9</span> : <span>Menos de 9</span>
                            }
                        </Home>
                    )}>Home</a> |

                    <a href="#" onClick={() => setComponente(<Features />)}>Features</a> |
                    <a href="#" onClick={() => setComponente(<Pricing />)}>Pricing</a> |
                    <a href="#" onClick={() => setComponente(<Demo />)}>Demo</a> |
                    <a href="#" onClick={() => setComponente(<Resource />)}>Resource</a> |
                </nav>
            </header>

            <div>
                {componente}
            </div>
        </>
    )
}
