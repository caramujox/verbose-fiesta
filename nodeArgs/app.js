console.log(process.argv.slice(2))

let argList = process.argv.slice(2)
for (args of argList) {
  console.log(`argumento: ${args}`)
}
for (let i = 0; i < argList.length; i++) {
  console.log(`posicao: ${i} | argumento: ${argList[i]}`)
}
