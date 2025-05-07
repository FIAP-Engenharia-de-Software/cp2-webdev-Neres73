// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function pegarnumero1() {
  numero1 = 5
  return numero1

}

function pegarnumero2() {
  numero2 = 5
  return numero2



}

function escolha() {
  escolha = "+"
  return escolha



}


function calcular(pegarnumero1,pegarnumero2,escolha) {
  if (escolha = "/")
    resultado = (pegarnumero1/pegarnumero2)

  if (escolha = "+")
    resultado = (pegarnumero1 + pegarnumero2)

  if (escolha = "-")
    resultado = (pegarnumero1 - pegarnumero2)
  if (escolha = "*")
    resultado = (pegarnumero1 * pegarnumero2)
  return resultado
  
}
calcular()









//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };