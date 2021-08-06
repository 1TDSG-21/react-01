//criando uma function para somar dois valores - Função padrão
function sum(a,b)
{
    return a + b;
};

//chamando a function
console.log("Resultado da soma: ", sum(10,10));

//criando uma function para somar dois valores - Arrow-Function
const subtracao = (a,b) =>
{
    return a - b;
};

//chamando a function
console.log("Resultado da subtração:", subtracao(15,10));

//criando uma function para somar dois valores - Arrow-Function - Simplificada
const divisao = (a,b) => a/b;

//chamando a function
console.log("Resultado da subtração:", divisao(6,2));

//Call-Back Arrow-Function
const msg = () => console.log("Voltamos!");

//Criando o elemento a partir do front
//Utilizando o querySelector()
const botao = document.querySelector('#meuBotao');

//Utilizando o getElementById()
//const botao = document.getElementById('meuBotao')

//Atribuindo estilo css ao elemento botão recuperado na constante
botao.style.backgroundColor = '#fff';

//Atrelas um evento = click
/*botao.addEventListener('click', function()
{
    console.log(`Evento disparado: ${sum(10,10)}`)
});
*/

//Alterando o valor de h1
botao.addEventListener('click', () => 
{
    const tituloH1 = document.querySelector('#titulo1')
    tituloH1.textContent = 'Voltamos em Grande Estilo = React!'
});

//botao.addEventListener('click', msg) 