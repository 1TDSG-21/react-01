import React from "react";

export default function Code() {
    const nome = "Matheus";
    const curso = "Análise e desenvolvimento de sistemas";
    const turma = "1TDSG";
    return(
        <>
            <p><code>Java</code> é a melhor linguagem...</p>
            <p>Nome: {nome}</p>
            <p>Curso: {curso}</p>
            <p>Turma: {turma}</p>
        </>
    );
}