

const images = [
    { url: 'https://picsum.photos/400/300?random=1', title: 'Título 1', description: 'Descripción de la imagen 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { url: 'https://picsum.photos/400/300?random=2', title: 'Título 2', description: 'Descripción de la imagen 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { url: 'https://picsum.photos/400/300?random=3', title: 'Título 3', description: 'Descripción de la imagen 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { url: 'https://picsum.photos/400/300?random=4', title: 'Título 4', description: 'Descripción de la imagen 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
    { url: 'https://picsum.photos/400/300?random=5', title: 'Título 5', description: 'Descripción de la imagen 5. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
    { url: 'https://picsum.photos/400/300?random=1', title: 'Título 1', description: 'Descripción de la imagen 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { url: 'https://picsum.photos/400/300?random=2', title: 'Título 2', description: 'Descripción de la imagen 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { url: 'https://picsum.photos/400/300?random=3', title: 'Título 3', description: 'Descripción de la imagen 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { url: 'https://picsum.photos/400/300?random=4', title: 'Título 4', description: 'Descripción de la imagen 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
    { url: 'https://picsum.photos/400/300?random=5', title: 'Título 5', description: 'Descripción de la imagen 5. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' },
    { url: 'https://picsum.photos/400/300?random=1', title: 'Título 1', description: 'Descripción de la imagen 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { url: 'https://picsum.photos/400/300?random=2', title: 'Título 2', description: 'Descripción de la imagen 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { url: 'https://picsum.photos/400/300?random=3', title: 'Título 3', description: 'Descripción de la imagen 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { url: 'https://picsum.photos/400/300?random=4', title: 'Título 4', description: 'Descripción de la imagen 4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
    { url: 'https://picsum.photos/400/300?random=5', title: 'Título 5', description: 'Descripción de la imagen 5. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.' }
];

const mainImage = document.getElementById('mainImage');
const title = document.getElementById('title');
const description = document.getElementById('description');
const thumbnailsContainer = document.getElementById('thumbnails');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

let currentIndex = 0;

function updateMainContent(index) {
    mainImage.src = images[index].url;
    title.textContent = images[index].title;
    description.textContent = images[index].description;

    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });

    scrollToThumbnail(index);
}



function scrollToThumbnail(index) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnail = thumbnails[index];
    const containerRect = thumbnailsContainer.getBoundingClientRect();
    const thumbnailRect = thumbnail.getBoundingClientRect();

    if (thumbnailRect.left < containerRect.left || thumbnailRect.right > containerRect.right) {
        const scrollLeft = thumbnail.offsetLeft - (thumbnailsContainer.clientWidth - thumbnail.clientWidth) / 2;
        thumbnailsContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateMainContent(currentIndex);
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainContent(currentIndex);
}

images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.url;
    thumbnail.alt = `Miniatura ${index + 1}`;
    thumbnail.classList.add('thumbnail');
    if (index === 0) thumbnail.classList.add('active');
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainContent(index);
    });
    thumbnailsContainer.appendChild(thumbnail);
});

prevArrow.addEventListener('click', showPrevImage);
nextArrow.addEventListener('click', showNextImage);

updateMainContent(0);





const carousel = document.querySelector('.carousel-thumbnails');
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
