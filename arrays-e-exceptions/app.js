try {
  const listaProds = [
    'Pao',
    'Leite',
    'Frios',
    'Arroz',
    'Feijao',
    'Ovo',
    'Sabonete',
    'Detergente'
  ]

  const listArgs = process.argv.slice(2)
  console.log('Lista Ordenada em alfabetica')
  console.log(listaProds.sort())

  const listProdsDisponiveis = listaProds.filter(produto => {
    return listArgs.find(argumento => argumento === produto)
  })

  listProdsDisponiveis.forEach(produto => console.log(`${produto} disponivel`))

  console.log('################')

  const listProdsIndisp = listaProds.filter(produto => {
    return !listArgs.find(argumento => argumento === produto)
  })
  listProdsIndisp.forEach(produto => console.log(`${produto} indisponivel`))
} catch (e) {
  console.log('Deu xabu parcero')
}
