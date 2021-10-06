class JogoDaMemoria {
    // se mandar um obj = { tela> 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente
    // a propriedade tela
    constructor({ tela, util }){
        this.tela = tela
        this.util = util
        // caminho do arquivo, sempre relativo
        // ao index.html
        this.iconePadrao = './img/padrao.png'
        this.heroisIniciais = [
            { img: './img/batman.png', nome: 'batman'},
            { img: './img/flash.png', nome: 'flash'},
            { img: './img/deadpool.png', nome: 'deadpool'},
            { img: './img/spider.png', nome: 'spider'}
        ]
        
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }

    inicializar(){
        // vai pegar todas as funções da clase tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // força a tela a usar o THIS de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))

        this.tela.configurarClickVerificarSelecao(this.verificarSelecao.bind(this))
    
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }

    esconderHerois(herois){
        //vamos trocar a imagem de todos os herois existentes
        // pelo icone padrão
        // como fizemos no construtor, vamos extrair somente o necessário
        // usando a sintaxe ({ chave: 1}) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando nao usamos : (exemplo do id), o JS entende que o nome
        // é o mesmo do valor. Ex. id: id, vira id,
        const heroisOcultos = herois.map(( { nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardamos os herois para trabalhar com eles depois
        this.heroisEscondidos = heroisOcultos
    }

    verificarSelecao(id, nome){
        const item = { id, nome }
        // alert(`Olá: ${item.id}, ${item.nome}`)
        // vamos verificar a quantidade de herois selecionados
        // e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                // adiciona a escolha na lista, esperando pela
                // próxima clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa
                // que o usuário só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // zerar itens para não selecionar mais de dois
                this.heroisSelecionados = []
                // conferimos se os nomes e ids batem
                // conforme o esperado
                if(opcao1.nome === item.nome && opcao1.id !== id){
                    // Nesse IF, impede o usuario de clicar duas vezes
                    // no mesmo card 2x e ganhar o jogo
                    this.exibirHerois(item.nome)
                    this.tela.exibirMensagem()
                    // parar o IF
                    return;
                }

                this.tela.exibirMensagem(false)
                // fim do case
                break;
        }
    }
   
    async embaralhar(){
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()

        // vamos esperar 1 segundo para atualizar a tela
        /*  setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000); */

        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
    }

    exibirHerois(nomeDoHeroi){
        // vamos procurar esse heroi pelo nome em nossos heroiIniciais
        // vamos obter somente a imagem dele
        const {img} = this.heroisIniciais.find(({nome}) => nomeDoHeroi === nome)
        // vamos criar a função na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)

    }

    mostrarHeroisEscondidos(){
        // vamos pegar todos os herois da tela e colocar
        // seu respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos){
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagens(heroisEscondidos)
    }

    jogar(){
        this.embaralhar()
    }
}