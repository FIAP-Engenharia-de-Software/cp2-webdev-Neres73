// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.
function pegarnota(){
  valor = prompt("digite sua nota")
}
function classificarNota(pegarnota) {
  if(nota>=6)
    resultado = "Aprovado"
  if(nota<=6)
    resultado = "Reprovado"
  if(nota>10)
    resultado = "Nota Inválida"
  if(nota<0)
    resultado = "Nota Inválida"
  return resultado
  
  
}
function resultado(classificarNota){
  alert(resultado)
  
}
resultado()




//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };