const heroi = {
    nome: "Batman",
    idade: 100,
    sexo: "Masculino"
}

// console.log('nome', heroi.nome)
// console.log('idade', heroi['idade'])
// console.log('sexo', heroi.sexo)
// console.log('naoExiste', heroi.naoExiste)
heroi.id = 001
console.log(heroi)

console.log(Object.keys(heroi)) // Saber as chaves

console.log(Object.values(heroi)) // Saber os valores

const pessoa = {
    tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa)
delete novoObj.sexo
console.log(novoObj)