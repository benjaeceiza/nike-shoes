const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
contador = 1;
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const color5 = document.getElementById("color5");
const color6 = document.getElementById("color6");
const color7 = document.getElementById("color7");

const footer = document.getElementById("footer")
const footerInfo = document.getElementById("footer-informativo");



function showSlide(i) {
    color1.className = "colores__img";
    color2.className = "colores__img";
    color3.className = "colores__img";
    color4.className = "colores__img";
    color5.className = "colores__img";
    color6.className = "colores__img";
    color7.className = "colores__img";
    index = (i + slide.length) % slide.length;
   
    slides.style.transform = `translateX(${-index * 100}%)`;

    
    document.body.style.backgroundColor = slide[index].dataset.color;
    switch (index) {
        case 0:
            color1.className = "colores__img brillo";
            footer.className = "footer-fondo1";
            break;
        case 1:
            color2.className = "colores__img brillo";
            footer.className = "footer-fondo2";
            break;
        case 2:
            color3.className = "colores__img brillo";
            footer.className = "footer-fondo3";
            break;
        case 3:
            color4.className = "colores__img brillo";
            footer.className = "footer-fondo4";
            break;
        case 4:
            color5.className = "colores__img brillo";
            footer.className = "footer-fondo5";
            break;
        case 5:
            color6.className = "colores__img brillo";
            footer.className = "footer-fondo6";
            break;

        case 6:
            color7.className = "colores__img brillo";
            footer.className = "footer-fondo7";
            break;

    }

    
}


prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

color1.onclick = () => showSlide(0)
color2.onclick = () => showSlide(1)
color3.onclick = () => showSlide(2)
color4.onclick = () => showSlide(3)
color5.onclick = () => showSlide(4)
color6.onclick = () => showSlide(5)
color7.onclick = () => showSlide(6)


showSlide(index);