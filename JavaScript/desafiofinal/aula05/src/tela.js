const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"

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
}