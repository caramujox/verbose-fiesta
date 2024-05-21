const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const validateNumber = number => {
    const num = Number.parseFloat(number)
    return num ? num : console.log("burro")
}

const validateOperation = operador => {
  switch (operador) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      return operador
    default:
      console.log('burro')
  }
}

readline.question('Fala o numero ai pai:', number => {
  const numA = validateNumber(number)
  if (numA) {
    readline.question('Fala outro:', numero => {
      const numB = validateNumber(numero)
      if (numB) {
        readline.question('QQ tu quer fazer?', operador => {
          switch (operador) {
            case '+':
              return console.log(`SOMA:  ${numA + numB}`)
            case '-':
              return console.log(`Subtracao:  ${numA - numB}`)
            case '*':
              return console.log(`Multiplications:  ${numA * numB}`)
            case '/':
              return console.log(`Joy Division:  ${numA / numB}`)
            case '%':
              return console.log(`Resto do resto ainda é algo:  ${numA % numB}`)
            default:
              console.log('Ce é burro?')
          }
        })
      }
    })
  }
})
