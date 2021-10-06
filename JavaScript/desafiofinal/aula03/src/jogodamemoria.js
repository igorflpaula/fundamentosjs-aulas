class JogoDaMemoria {
    // se mandar um obj = { tela> 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente
    // a propriedade tela
    constructor({ tela }){
        this.tela = tela
        // caminho do arquivo, sempre relativo
        // ao index.html
        this.heroisIniciais = [
            { img: './img/batman.png', name: 'batman'},
            { img: './img/flash.png', name: 'flash'},
            { img: './img/deadpool.png', name: 'deadpool'},
            { img: './img/spider.png', name: 'spider'}
        ]
    }

    inicializar(){
        // vai pegar todas as funções da clase tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // força a tela a usar o THIS de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar(){
        const copias = this.heroisIniciais
        // duplicar os itens
        .concat(this.heroisIniciais)
        // entrar em cada idem e criar um ID aleatório
        .map(item => {
            return Object.assign({}, item, { id: Math.random()/0.5})
        })
        // ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
    }

    jogar(){
        this.embaralhar()
    }
}