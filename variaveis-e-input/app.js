const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const nome = 'popopo'
const idade = 18
const isEstudante = true

console.log(nome, idade, isEstudante)
let leituraDeCampo

readLine.question('Fala que eu te escuto...', input => {
  leituraDeCampo = input
  console.log(`O usuario digitou  ${leituraDeCampo}`)
})
