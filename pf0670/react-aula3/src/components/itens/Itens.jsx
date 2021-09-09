import React from 'react'

export default function Itens(props) {
    return (
        <>
            <a href="#">Home</a> |
            <a href="#">Features</a> |
            <a href="#">Pricing</a> |
            <a href="#">Demo</a> |
            <a href="#">Resource</a> |
            {props.children}
        </>
    )
}
