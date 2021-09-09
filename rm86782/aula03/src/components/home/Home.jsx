import React from 'react'

export default function Home(props) {
    return (
        <section>
            <h1>Essa é a home</h1>
            {props.children}
        </section>
    )
}
