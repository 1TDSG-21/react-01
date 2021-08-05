

//Função padrão
function soma(a,b){
    return a+b
}
//Apresentando o valor no consolo
console.log("Resultado da Adição : " + soma(10,10))

//Arrow-Function
const subtracao = (c,d) =>{
    return c-d
}
//Apresentando o valor no consolo
console.log("Resultado da Subtração : " + soma(15,5))

//Arrow-Function simplificada
const divisao = (e,f) => e/f
    
//Apresentando o valor no consolo
console.log("Resultado da Divisão : " + divisao(6,2))

//Call-back Arrow-Function
const msg = () => console.log('Voltamos!!!')

//Criando o elemento a partir do Front
//utilizando o querySelector()
const botao = document.querySelector('#meuBotao')
//ulizando o getElementById()
//const botao = document.getElementById('meuBotao')
//Aribuindo estilo css ao elemento botão recuperando na constante.
botao.style.backgroundColor = '#fff'

//Atrela um evento ao botao = click
//botao.addEventListener('click',() => console.log("EVENTO DISPARADO: " + divisao(10,5)))

//Alterando o valor do Título H1
botao.addEventListener('click' , () => {
    const títuloH1 = document.querySelector('#título1')
    títuloH1.textContent = 'Voltamos em Grande Estilo = React!!!'

})