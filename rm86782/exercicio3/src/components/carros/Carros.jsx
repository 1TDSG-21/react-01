import React from 'react'

export default function Carros(props) {
    return (
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}
