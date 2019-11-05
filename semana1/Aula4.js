/**Exercícios de interpretação de código**
EXERCÍCIO 1
Esta somando do 0 ao 10.
EXERCÍCIO 2
a. inclui um valor dentro da array
b. [ 10, 15, 20, 25, 30 ]
c. Com Numero 3 [ 12, 15, 18, 27, 30 ]
Com Numero 4 [ 12, 20 ]
EXERCÍCIO 3
0
00
000
0000

**Exercícios de escrita de código**
EXERCÍCIO 4
a.
 const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0]
let menor = array[0]
for (let i=0; i < array.length; i++){
  const elemento = array [i]
  if (elemento > maior) {
    maior = elemento
  }
}
for (let i=0; i < array.length; i++){
const elemento2 = array [i]
  if (elemento2 < menor){
  menor = elemento2
   }
}
console.log("O maior número é " +maior+ " e o menor é " + menor)

b.

let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let resultado = []
for(i=0; i < array.length; i++){
  let elemento = array[i]
  elemento /= 10
  resultado.push(elemento)
}
console.log(resultado)

 c.
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let impar = []
for(let i = 0; i<= array.length; i++){
  let elemento = array[i]
  if(elemento % 2 ===1){
    impar.push(elemento)
  }
}
console.log(impar)

d. 
let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let index = []
for(let i = 0; i < array.length; i++){
  let elemento = array[i]
  let texto = "O elemento do index " + elemento + " é " + i

  index.push(texto)
}
console.log(index)

