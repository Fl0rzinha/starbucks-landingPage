function mudarImagem(caminho) {
    var imagem = document.getElementById("sorveteGigante");
    imagem.src = caminho;
}

function changeElementColors(color) {
    // seta as variáveis
    const circulo = document.querySelector('.circulo')
    const botaoVejaMais = document.getElementById("button-veja-mais")
    const subtituloStarbucks = document.getElementById("starbucks-subtitle")

    // muda as cores das variáveis
    circulo.style.background = color;
    botaoVejaMais.style.backgroundColor = color;
    subtituloStarbucks.style.color = color;
}

function mudarCorBotaoVejaMais(color) {
    const botaoVejaMais = document.getElementById("button-veja-mais")
    botaoVejaMais.style.backgroundColor = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle'); //cria uma variavel
    var links = document.querySelector('.links'); //cria uma variavel e usa
    menuToogle.classList.toggle('active') //troca o estado da classe
    links.classList.toogle('active') //troca o estado da classe
}