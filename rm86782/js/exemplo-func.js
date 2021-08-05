// Função padrão
function soma(a, b) {
    return a + b
}

// Arrow function
const subtracao = (a, b) => a - b

// CallBack Arrow-Function
const msg = () => console.log("Voltamos!!! Java é melhor <3")
// Capturando elemento do HTML
const button = document.querySelector("#meuBotao")
// Atribuindo CSS ao button
button.style.backgroundColor = "#ffffff"
// Atribuindo um evento: click
button.addEventListener("click", () => {
    const h1 = document.querySelector(".titulo1")
    h1.textContent = "Java é bom!"
})

// Apresentando valor no console
console.log("Resultado da soma: " + soma(10, 10))
console.log("Resultado da subtração: " + subtracao(9, 5))