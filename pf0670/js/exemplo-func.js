

//Função padrão
function soma(a,b){
    return a+b
}
//Apresentando o valor no console
console.log("Resultado da Adição : " + soma(10,10))

//Arrow-Function
const subtracao = (c,d) =>{
    return c-d
}
//Apresentando o valor no console
console.log("Resultado da Subtração : " + subtracao(15,5))

//Arrow-Function simplificada
const divisao = (e,f) => e/f

//Apresentando o valor no console
console.log("Resultado da Divisão : " + divisao(6,2))

//Call-Back Arrow-Function
const msg = () => console.log('Voltamos!!!')

//Criando o elemento a partir do Front
//Utilizando o querySelector()
const botao = document.querySelector('#meuBotao')
//Utilizando o getElementById()
//const botao = document.getElementById('meuBotao')
//Atribuindo estilo css ao elemento botão recuperado na constante.
botao.style.backgroundColor = '#fff'

//Atrela um evento ao botão = click
//botao.addEventListener('click', () => console.log("EVENTO DISPARADO: " + divisao(10,5)))

botao.addEventListener('click', msg)

//Alterando o valor do Título H1
// botao.addEventListener('click', () =>  {
//     const tituloH1 = document.querySelector('#titulo1')
//     tituloH1.textContent = 'Voltamos em Grande Estilo = React!!!'

// })




