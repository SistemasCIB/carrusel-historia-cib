// Datos de las imágenes que se cargaran en las miniaturas
const imagenes = {
  1: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1970.jpg",
    title: "1970",
    description:
      "La Corporación para Investigaciones Biológicas nace en 1970, gracias 3 hechos puntuales: la firma del acta de constitución y aprobación de los estatutos; la realización del Acta de Fundación, y el desarrollo del primer proyecto de investigación. Nuestro origen fue posible gracias al apoyo y acompañamiento de la Universidad de Antioquia y su Facultad de Medicina.",
    date: "1970",
  },
  2: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1974-1975.jpg",
    title: "1974-1975",
    description:
      "Se realiza la segunda edición del libro Fundamentos de Medicina, que pasa a estar bajo propiedad de la CIB.",
    date: "1974",
  },
  3: {
    img: "https://sistemascib.github.io/Nuestra_historia/img//1976.jpg",
    title: "1976",
    description:
      "Entra en funcionamiento nuestra sede en el Parque de Berrío, y nos dedicamos por completo a la publicación de los libros de medicina interna.",
    date: "1976",
  },
  4: {
    img: "https://sistemascib.github.io/Nuestra_historia/img//1978.jpg",
    title: "1978",
    description:
      "Gracias a la asociación con el Hospital Pablo Tobón Uribe, nos constituimos como centro de investigación, con un laboratorio cuyos equipos fueron donados por la Dra. Charlotte Campbell, catedrática de Harvard. Es mismo año inauguramos el servicio de diagnóstico especializado en micología.",
    date: "1978",
  },
  5: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1979-1980.jpg",
    title: "1979-1980",
    description:
      "Damos inicio a las secciones de inmunología, infectología pediátrica y parasitología. Posteriormente, la unidad de infectología pediátrica, creada por el Dr. Hugo Trujillo Soto, se convertiría en lo que hoy es la unidad de bacteriología y micobacterias.",
    date: "1979",
  },
  6: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1980.jpg",
    title: "1980",
    description:
      "Nace el club de revista del Dr. Rojas y se da la vinculación de médicos y bacteriólogos en su año rural.",
    date: "1980",
  },
  7: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1983.jpeg",
    title: "1983",
    description:
      "Se realiza la primera edición del Manual de Terapéutica, uno de los textos médicos más exitosos en Latinoamérica.",
    date: "1983",
  },
  8: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1985.jpeg",
    title: "1985",
    description:
      "Gracias a las gestiones realizadas con la Organización Panamericana de la Salud, se realiza una internacionalización del Fondo Editorial con la obra Fundamentos de Medicina.",
    date: "1985",
  },
  9: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1989.jpg",
    title: "1989",
    description:
      "Incursionamos en la docencia a través de la formación de jóvenes investigadores y apoyo a las entidades de salud en su objeto institucional.",
    date: "1989",
  },
  10: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1991-1992.jpg",
    title: "1991-1992",
    description:
      "Una vez finalizados sus estudios, varios investigadores se unen a los laboratorios de la CIB, lo que permite la creación de la Unidad de Biología Celular y Molecular.",
    date: "1991",
  },
  11: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1994.jpg",
    title: "1994",
    description:
      "Comienza la construcción de nuestra sede propia. Ese mismo año, creamos la línea de Cardiología con énfasis en hipertensión arterial y realizamos la primera edición del libro Fundamentos de Pediatría.",
    date: "1994",
  },
  12: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/1998-2001.jpg",
    title: "1998-2001",
    description:
      "El trabajo conjunto con las universidades nos convierte en campo de práctica para sus estudiantes de pregrado y posgrado.",
    date: "1998",
  },
  13: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2003.jpg",
    title: "2003",
    description: "Creamos oficialmente la Unidad de Biodiversidad.",
    date: "2003",
  },
  14: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2004.jpg",
    title: "2004",
    description:
      "El Centro de Excelencia en Tuberculosis es establecido por Colciencias y firmamos más acuerdos de cooperación con instituciones nacionales e internacionales.",
    date: "2004",
  },
  15: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2006.jpg",
    title: "2006",
    description:
      "Junto con la Universidad de Antioquia y la Universidad Nacional de Colombia, logramos nuestra primera patente.",
    date: "2006",
  },
  16: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2009.jpg",
    title: "2009",
    description:
      "Recibimos la visita del Premio Nobel de Medicina y Fisiología de 1993, Sir Richard Roberts. Ese mismo años obtenemos los certificados de ICONTEC ISO 9001 e IQNet.",
    date: "2009",
  },
  17: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2010FOTO1.jpg",
    title: "2010",
    description:
      "Nuevos PHd se vinculan a nuestras distintas unidades de investigación. En convenio con la Universidad del Rosario, abrimos la línea de investigación de Bioinformática y abrimos el Centro Clínico y de Investigación SICOR.",
    date: "2010",
  },
  18: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2010FOTO2.jpg",
    title: "2010",
    description:
      "Este mismo año nuestra Corporación fue considerada como el mejor centro de investigación del país, en el estudio Caracterización de Centros Autónomos de Investigación y Desarrollo Tecnológico, desarrollado por el Observatorio Colombiano de Ciencia y Tecnología.",
    date: "2010",
  },
  19: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2017.png",
    title: "2017",
    description: "La Universidad de Santander se vincula como socio de la CIB.",
    date: "2017",
  },
  20: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2018.jpg",
    title: "2018",
    description:
      "La CIB es reconocida como centro de investigación por cinco años más. Esta distinción nos consolida como una institución que aporta a la generación de conocimiento en nuestro país. El reconocimiento lo otorga la Política Nacional de Actores del Sistema Nacional de Ciencia, Tecnología e Innovación (SNCTeI).",
    date: "2018",
  },
  21: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2019.jpeg",
    title: "Orden al Mérito Don Juan del Corral, grado Plata.",
    description:
      "Ceremonia de entrega de la distinción Orden al Mérito Don Juan del Corral, grado Plata, a la Corporación para Investigaciones Biológicas por sus 49 años de promover investigación sostenible al servicio de la vida. Gracias al Concejo de Medellín y al concejal Ricardo León Yepez Pérez por este gran reconocimiento.",
    date: "2019",
  },
  22: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2020.png",
    title: "2020",
    description:
      "Mediante Acuerdo municipal N°39 de 1998, el Concejo de Medellín creó la condecoración Orquídea Concejo de Medellín, máximo reconocimiento entregado por la Corporación a personas, entidades o instituciones nacionales o extranjeras que en desarrollo de sus actividades agroindustriales, científicas, tecnológicas, deportivas, ecológicas y cívicas, educativas y culturales, empresariales y humanas, así como de defensa de los animales, se destaquen en el ámbito regional, nacional y/o internacional, como aporte a la humanidad, a nuestra cultura y a nuestra ciudad.",
    date: "2020",
  },
  23: {
    img: "https://sistemascib.github.io/Nuestra_historia/img/2021.png",
    title: "2021",
    description:
      "Colombiano Ejemplar 2021. La CIB Medellín recibió el reconocimiento al Colombiano ejemplar 2021 en la categoría Ciencia y Tecnología. Seguimos trabajando arduamente para fortalecer nuestro propósito superior y contribuir al desarrollo de nuestra región: “Promover investigación sostenible al servicio de la vida”. #lacienciaalserviciodelavida #ElColombianoEjemplar2021",
    date: "2021",
  },
};

// Elementos del DOM
const videoElement = document.getElementById("CIB_video");
const fotoElement = document.querySelector(".CIB_foto");
const foto = document.querySelector(".foto_historia");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const date = document.querySelector(".date");
const containerImages = document.querySelector(".CIB_miniaturas");

let currentIndex = 0; // 0 represents the video, 1 and above represent images

// Función para cambiar entre video e imágenes
function cambiarDate(indice) {
  if (indice === 0) {
    videoElement.style.display = "block";
    fotoElement.style.display = "none";
    title.textContent = "Nuestra Historia";
    description.textContent ="CIB - Corporación para investigaciones biológicas";
    date.textContent = "";
  } else {
    videoElement.style.display = "none";
    fotoElement.style.display = "block";
    const imageData = imagenes[indice];
    foto.setAttribute("src", imageData.img);
    foto.setAttribute("id", indice);
    title.textContent = imageData.title;
    description.textContent = imageData.description;
    date.textContent = imageData.date;
  }

  // Actualizar la miniatura activa
  document.querySelectorAll(".miniatura").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  if (indice > 0) {
    const activeThumb = document.getElementById(`thumb-${indice}`);
    activeThumb.classList.add("active");
    activeThumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  currentIndex = indice;
}

// Función para pasar entre contenidos
function pasar(direccion) {
  const totalContenidos = Object.keys(imagenes).length + 1; // +1 for the video
  let nuevoIndice;

  if (direccion === "izq") {
    nuevoIndice = currentIndex > 0 ? currentIndex - 1 : totalContenidos - 1;
  } else {
    nuevoIndice = currentIndex < totalContenidos - 1 ? currentIndex + 1 : 0;
  }

  cambiarDate(nuevoIndice);
}

// Eventos para las flechas
document.querySelector(".izq").addEventListener("click", () => pasar("izq"));
document.querySelector(".der").addEventListener("click", () => pasar("der"));

// Generar miniaturas
Object.entries(imagenes).forEach(([indice, item]) => {
  const miniatura = document.createElement("span");
  miniatura.className = "fechas_miniaturas";
  miniatura.title = item.title;
  miniatura.id = `thumb-${indice}`;
  miniatura.textContent = item.date

  miniatura.addEventListener("click", () => cambiarDate(parseInt(indice)));

  containerImages.appendChild(miniatura);
});

// Inicializar con el video
cambiarDate(0);
