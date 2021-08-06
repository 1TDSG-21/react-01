import React from 'react';

export default function CodeP()
{

  const nomeCurso = '1TDSG'
  const nomeAluno = 'Matheus'
    return(
      <>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Curso: {nomeCurso}</p>
        <p>Aluno: {nomeAluno}</p>
      </>
    );
}