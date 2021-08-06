import React from "react";
import Logo from "../Logo";
import Code from "../Code-p";
import Ligacao from "../Ligacao";

export default function Cabecalho() {
    return(
        <header className="App-header">
            <Logo/>
            <Code/>
            <Ligacao/>
        </header>
    );
}