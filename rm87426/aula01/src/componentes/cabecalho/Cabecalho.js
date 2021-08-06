import React from 'react';
import Imagem from '../imagem/Imagem';
import CodeP from '../codeP/CodeP';
import Ligacao from '../ligacao/Ligacao';

export default function Cabecalho()
{
    return(
        <header className="App-header">
            <Imagem/>
            <CodeP/>
            <Ligacao/>
        </header>
    );
}