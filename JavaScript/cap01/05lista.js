const minhaLista = []
const tarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

// console.log(tarefas[0])
// console.log(tarefas[1])
// console.log(tarefas[4])

// Quantiade de itens no array
// console.log(tarefas.length)

// Adicionar Item
tarefas.push("formatar computador")
// console.log(tarefas)

// Remover o último da Lista
//const ultimo = tarefas.pop()
// console.log(ultimo, tarefas)

// Remover o primeiro da Lista
// const primeiro = tarefas.shift()
// console.log(primeiro, tarefas)

// Remover um item especifico da partir de um indíce
// console.log(tarefas[2])
// Qual item de inicio / Quantos remover
// tarefas.splice(2, 1)
// console.log(tarefas)

const itens = [
    1, "computador", 0.22
]

// Verificar o tipo do array
// console.log(typeof(itens))

// Verificar se é array da forma correta
// console.log(Array.isArray(itens))

// Ordenar
// const numeros = [3,2,1,0]
// console.log(numeros.sort())

// Juntar dois arrays
// const novo = itens.concat([1,2,3])
// console.log(novo)

// Juntar arrays em uma string
// console.log(itens.join(','))

// Verificar indice do item
const index = itens.indexOf('computador')
console.log(itens[index])