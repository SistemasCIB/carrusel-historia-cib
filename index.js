const carousel = document.querySelector('.CIB_miniaturas');
let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  carousel.classList.add('active');
  startX = e.pageX + carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.style.cursor = 'grabbing'; // Cambia el cursor al arrastrar
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
  carousel.classList.remove('active');
  carousel.style.cursor = 'grab'; // Restablece el cursor cuando se sale del carrusel
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
  carousel.classList.remove('active');
  carousel.style.cursor = 'grab'; // Restablece el cursor al soltar
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // Detiene la función si no se está arrastrando
  e.preventDefault();
  const x = e.pageX + carousel.offsetLeft;
  const walk = (x - startX) * 2; // Ajusta la velocidad del desplazamiento
  carousel.scrollLeft = scrollLeft - walk;
});








let fotoCambiar = document.querySelector(".foto_historia");

window.val;

let n = {
    1 : "https://sebastian-alvarez-diaz.vercel.app/img/maquina.jpg",
    2 : "https://portafolio-dv.netlify.app/img/mia.jpg",
    3 : "https://sebastian-alvarez-diaz.vercel.app/img/maquina.jpg",
    4 : "https://portafolio-dv.netlify.app/img/mia.jpg",
    5 : "https://sebastian-alvarez-diaz.vercel.app/img/maquina.jpg",
};


function pasar(lado ,indice) {

    let num = parseInt(indice)

    if((num === 0 && lado === "izq") || (num === 1 && lado === "izq")) val = 1;
    if (num > 1 && lado === "izq" ) val--


    if (num >= 1 && lado === "der" && num < Object.values(n).length) val++
    if(num === 0 && lado === "der") val = 2;


    fotoCambiar.setAttribute("src", n[val]);
    fotoCambiar.id = val;

};



document.querySelector(".izq").addEventListener("click" , (e) => {
    e.preventDefault();

    pasar("izq" , fotoCambiar.id);


});

document.querySelector(".der").addEventListener("click" , (e) => {
    e.preventDefault();

    pasar("der" , fotoCambiar.id);

});

let containerImages = document.querySelector(".CIB_miniaturas");

window.ite = 1
Object.values(n).forEach((item) => {

    let nodo = `
        <img 
        src="${item}" 
        alt="foto de historia" 
        title="foto historia"
        width="100"
        height="100"
        loading="lazy"
        id="${ite}"
        >
    `
    containerImages.innerHTML += nodo
    ite++
})