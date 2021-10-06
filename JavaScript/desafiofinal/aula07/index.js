function onLoad(){
    /* //console.log('Carregou a tela!!', Tela, JogoDaMemoria)
    const heroi = {
        // sempre relativo ao index.html
        img: './img/batman.png',
        nome: 'batman'
    }
    // const codigoHTML = Tela.obterCodigoHTML(heroi)
    // Tela.alterarConteudoHTML(codigoHTML.concat(codigoHTML).concat(codigoHTML))

    /* Tela.atualizarImagens([
        heroi,
        heroi,
        heroi,
        heroi
    ]) */ 

    const dependencias = {
        tela: Tela, // a classe Tela é global
        util: Util
    }
    // inicializamos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}

window.onload = onLoad