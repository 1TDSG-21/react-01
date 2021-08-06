


function soma(a,b){
    return a+b
}

console.log("Resultado da Adição : " + soma(10,10))


const subtracao = (c,d) =>{
    return c-d
}

console.log("Resultado da Subtração : " + subtracao(15,5))


const divisao = (e,f) => e/f


console.log("Resultado da Divisão : " + divisao(6,2))


const msg = () => console.log('Voltamos!!!')


const botao = document.querySelector('#meuBotao')

botao.style.backgroundColor = '#fff'



botao.addEventListener('click', msg)





