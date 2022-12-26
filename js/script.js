let totalSlides = document.querySelectorAll('.slider--item').length
let slideAtual = 0

//Aqui eu ajusto o tamanho das minha div pai que engloba todas as imagens
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`

//Aqui ajeitamos a altura das setinha de controles, ela herda a altura de slider
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`

function goPrev(){
    slideAtual --
    if(slideAtual < 0){
        slideAtual = totalSlides -1
    }
    updateMargin()
}

function goNext(){
    slideAtual ++
    if(slideAtual > (totalSlides-1)){
        slideAtual = 0
    }
    updateMargin()
}

//Função para atualizar a margem
function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth
    //slide atual * a largura da tela do navegador
    let newMargin = (slideAtual * sliderItemWidth)

    //Aqui a gente seta na classe a margin, ou seja, sempre que clicar em proximo, a gente muda 1 tela baseado no valor vindo de newmargin
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

//Aqui eu atualizo as imagens automaticamente em um periodo de tempo
setInterval(goNext, 4000)