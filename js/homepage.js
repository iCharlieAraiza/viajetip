var slider = tns({
    "container": ".carrousel",
    "items": 2,
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 400,
    "loop": false,
    "controls": false,
    "rewind	": true,
    "nav": false,
  });

const cards = document.querySelectorAll('.carousel-cell');

const places = {
  "hills":{
    "title":"Zona montañosa, Mianmar",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl.",
    "image":"assets/img/hero/hills.png"
  },
  "japan":{
    "title":"Kioto, Japón",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl.",
    "image":"assets/img/hero/kyoto.jpg"
  },
  "maldives":{
    "title":"Maldivas, Océano Índico",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl.",
    "image":"assets/img/hero/maldives-bg.jpg"
  },
  "venice":{
    "title":"Venecia, Italia",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl.",
    "image":"assets/img/hero-img.jpg"
  },
}

const placeDescription = document.querySelector('.place-name');
const heroBackground = document.querySelector('.hero-background-img');
const fadein = document.querySelector('.background-fadein');


cards.forEach((card) => {
  card.addEventListener('click', () => {
    const value = card.getAttribute('data-value');
    placeDescription.innerHTML = places[value].title;
    fadein.innerHTML = `<img src="${places[value].image}" class="hero-background-img fadein" alt="hero">`
  });
})

