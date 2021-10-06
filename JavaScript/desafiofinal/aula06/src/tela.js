const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIBLE = "invisible"
const MENSAGENS = {
    sucesso:{
        texto: 'Combinação correta',
        classe: 'alert-sucess'
    },
    erro:{
        texto: 'Combinação incorreta!',
        classe: 'alert-danger'
    }
}

class Tela {
    static obterCodigoHTML(item){
        return `
        <div class="col-md-3">
            <div class="card" style="width: 18rem;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
            </div>
            <br>
        </div>
        `
    }
    
    static alterarConteudoHTML(codigoHTML){
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHTML
    }

    static gerarStringHTMLPelaImagem(itens){
        // para cada item da lista, vai executar a função obterCodigoHTML
        // ao final, vai concatenar tudo em uma única string
        // muda de Array para String
        return itens.map(Tela.obterCodigoHTML).join('')
    }

    static atualizarImagens(itens){
        const codigoHTML = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHTML)
    }

    static configurarBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }

    static configurarClickVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
    }

    static exibirHerois(nomeDoHeroi, img){
        const elementosHTML = document.getElementsByName(nomeDoHeroi)
        // para cada elemento encontrado na tela, vamos alterar
        // a imagem para a imagem inicial dele
        // com o forEach, para cada item, dentro dos () setamos
        // o valor de imagem

        elementosHTML.forEach(item => (item.src = img))
    }

    static exibirMensagem(sucesso = true){
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }else{
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIBLE)
    }
}