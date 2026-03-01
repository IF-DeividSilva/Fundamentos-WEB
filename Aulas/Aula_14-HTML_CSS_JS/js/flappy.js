function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    // construtor das barreiras
    this.elemento = novoElemento('div' , 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function ParDeBarreiras(altura, abertura, x){
    // instanciar novas barreiras
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    // add as barreiras no elemento
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    // random para ver as alturas das barreiras
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    //chama as funções..

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}
// testes
//const b = new ParDeBarreiras(700,200,800)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

// funciona tipo como uma fila circular para reusar as msmas 5 barreiras por conta do desempenho
// sempre que a barreira passa a tela ela vai para o fim da fila de barreiras e é sorteado uma nova abertura...
function Barreiras(altura, largura, abertura, espaço, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaço),
        new ParDeBarreiras(altura, abertura, largura + espaço * 2),
        new ParDeBarreiras(altura, abertura, largura + espaço * 3)
    ]
    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)
            
            // quando o elemento sair da area do jogo
            if (par.getX() < -par.getLargura()){
                par.setX(par.getX() + espaço * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouoMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouoMeio) notificarPonto()
        })
    } 
}
// colocar o passaro
// o passaro "voa" quando tem o click e fica caindo se não houver click
function Passaro (alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'img/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight
        // limites da tela ...
        if (novoY <= 0){
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo / 2)
}

// contabilizar os pontos do jogador
function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// verifica se os elementos estão sobrepostos
// verifica na horizontal (se a esquerda do B está mais perto da esquerda do A do que a direita do A :) )
// verifica na vertical (se o topo do B está mais perto da do topo do A do que a o height do A :) )

function estaoSobrepostos(elementoA, elementoB){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical

}

// verifica se o passaro bateu na barreira de cima ou na de baixo
function colidiu(passaro,barreiras){
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras => {
        if (!colidiu) {
            const superior = ParDeBarreiras.superior.elemento
            const inferior = ParDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}
// faz o jogo "andar" 
function FlappyBird(){
    // cria os elementos
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    // incere os elementos na area do jogo
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador  = setInterval(() => {
            barreiras.animar()
            passaro.animar()
            // trava o jogo em caso de colizão
            if (colidiu(passaro, barreiras)){
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()