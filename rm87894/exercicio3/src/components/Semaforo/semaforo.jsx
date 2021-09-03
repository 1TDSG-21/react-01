import React, { useState } from 'react'

export default function Semaforo(){

    const [semaforo, setSemaforo] = useState('');
    const [button,setButton] = useState(0)
     
    

    const sinal = () =>{
        setButton(batata => batata + 1)
        if (button === 0) {
            return  setSemaforo("Pare!")
        }
        if (button === 1) {
            return setSemaforo("Atenção")
        }
        if (button === 2) {
            return setSemaforo("Siga")
        }
        if(button === 3){
           return setButton(0)
        }
    }
    

 
    return(
        <section>
            <div>
                <h1>semaforo</h1>
                <button onClick = {sinal}>Aperte aqui!</button>
                <p>O sinal do semáforo diz: 
                    <div
                      style={{backgroundColor:  
                        button === 1? "#FF0000" : "#808080",
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                      }}
                      
                     />
                     <div
                      style={{backgroundColor:  
                        button === 2? "#FFFF00" : "#808080",
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                      }}
                      />
                      <div
                      style={{backgroundColor:  
                        button === 3? "#00FF00" : "#808080",
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                      }}
                      
                      />
                    <h2>{semaforo}</h2></p>
            </div>
        </section>      
    )

}