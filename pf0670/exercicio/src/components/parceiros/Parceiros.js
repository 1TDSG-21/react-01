import React from 'react'

export default function Parceiros(props) {

  const n1 = 10;
  const n2 = 5;

   return(
      <>
        <h2>Conheça nossos parceiros:</h2>

        <div>
          <p>O resultado do cálculo é : {props.calculo(2,2)}</p>
        </div>

        <p><a href="#">FIAT/Crysler</a></p>
        <p><a href="#">FORD</a></p>
        <p><a href="#">GM</a></p>
        <p><a href="#">NISSAN</a></p>
      </>
)}