function imgSlider(anything) {
    document.querySelector('#sorveteGigante').scr = anything;
}

function changeCircleColor(color) {
    const circulo = document.querySelector('.circulo')
    circulo.style.background = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle'); //cria uma variavel
    var links = document.querySelector('.links'); //cria uma variavel e usa
    menuToogle.classList.toggle('active') //troca o estado da classe
    links.classList.toogle('active') //troca o estado da classe
}