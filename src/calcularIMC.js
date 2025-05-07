// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function altura(){
    valor1 = prompt("digite sua altura")
    return valor1


}

function peso(){
    valor2 = prompt("digite seu peso")
    return valor2



}




function calcularIMC(peso, altura) {
    resultadofinal = (peso / altura*altura)
    return resultadofinal

}
calcularIMC()

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };