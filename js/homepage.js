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
    "image":"https://images.unsplash.com/photo-1519680772-3b7b1b1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  "japan":{
    "title":"Japan",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl.",
    "image":"https://images.unsplash.com/photo-1519680772-3b7b1b1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  "maldives":{
    "title":"Maldives",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl.",
    "image":"https://images.unsplash.com/photo-1519680772-3b7b1b1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
  "venice":{
    "title":"Venice",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl. Sed euismod, nunc ut aliquam aliquam, nisl nisl aliquet nisl, eget aliquam nisl lorem quis nisl.",
    "image":"https://images.unsplash.com/photo-1519680772-3b7b1b1b5f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
}

const placeDescription = document.querySelector('.place-name');


cards.forEach((card) => {
  card.addEventListener('click', () => {
    const value = card.getAttribute('data-value');
    placeDescription.innerHTML = places[value].title;
  });
})

