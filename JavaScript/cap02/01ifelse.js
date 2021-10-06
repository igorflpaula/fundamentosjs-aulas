let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]
// console.log('args', args)
// console.log('saldo', saldo)
if(isNaN(saldo)){
    console.log('valor invalido!!')
    return;
}

let tipoCliente = "premium"
if(saldo < 9){
    tipoCliente = "basic"
}
else if(saldo >= 10 && saldo < 20){
    tipoCliente = "gold"
}
else{
    tipoCliente = null
}

//null, undefined, vazio, 0 === false!

if(!tipoCliente){
    tipoCliente = 'indefinido'
}

console.log('Tipo do Cliente', tipoCliente)

const idade = 16 // Define a Idade
const resultado = idade >= 18 ?
    "Pode dirigir" :
    "Não pode dirigir"

console.log('Posso dirigir?', resultado)