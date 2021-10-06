const textoPar = "par"
const textoImpar = "impar"

/*for(let index = 0; index <= 10; index++){
    const decisao = index % 2 === 0 ? textoPar : textoImpar
    console.log(`O número ${index} é ${decisao}`)
}*/

const numeroRNG = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Veloz'
    },
    {
        id: Math.random(),
        nome: 'Mariazinha',
        superPoder: 'Super Força'
    }
]

//console.log(numeroRNG)

for(let index=0; index<numeroRNG.length; index++){
    const item = numeroRNG[index]
    console.log(
        `
        id: ${item.id}
        nome: ${item.nome}
        `
    )
}

// nao precisa do contador
for(const index in numeroRNG){
    const item = numeroRNG[index]
    console.log('Nome', item.nome)
}

// nao precisa usar index
for(const item of numeroRNG){
    console.log('Nome**', item.nome)
}