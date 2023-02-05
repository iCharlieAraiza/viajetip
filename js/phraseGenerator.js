const randomWord = (wordList) => {
    const random = Math.floor(Math.random() * wordList.length)
    return wordList[random]
}


const words = {
    'es decir': [ 'es decir', 'o sea', 'en otras palabras','esto es'],
    'una comparativa de precios': ['una comparativa de precios', 'una comparación de precios', 'una verificación completa de precios', 'una comparación de tarifas', 'una comparación completa de las tarifas'],
    'En este caso': ['En este caso', 'Para ello', 'En este sentido', 'En este punto', 'En este escenario','En este punto en particular'],
    'la reservación': ['hacer la reservación', 'hacer la reserva', 'hacer las reservas'],
    'antelación': ['antelación', 'anticipación', 'suficiente antelación','suficiente anticipación'],
    'Recuérdalo': ['Recuérdalo', 'Tenlo en cuenta', 'Toma nota', 'Toma en cuenta', 'Ten en cuenta',''],
    'el precio': ['el precio', 'el costo', 'el gasto', 'el monto'],
    'es importante': ['es importante', 'vale la pena', 'es necesario', 'es esencial', 'es primordial'],
    'en temporada baja': ['en temporada baja','de temporada baja', 'en meses de baja afluencia', 'en meses de baja demanda', 'en meses de baja ocupación'],
    'De la misma forma': ['De la misma forma', 'De igual manera', 'De la misma manera', 'Asimismo'],
    'ronda': ['ronda', 'está por', 'está a partir de'],
    'ahorrar dinero': ['ahorrar dinero', 'gastar menos durante el viaje', 'economizar y optimizar el presupuesto', 'optimizar el presupuesto', 'ahorrar'],
    'aproximadamente': ['aproximadamente', 'en promedio', 'aprox'],
    'estimado': ['estimado', 'pesupuestado', 'calculado', 'planificado', 'proyectado'],
    'durante el viaje': ['durante el viaje', 'en el viaje', '', 'durante las vacaciones', 'cuando viajas'],
    'trampas de turistas': ['«trampas de turistas»', '«trampas para turistas»' , `«trampas de turistas» o sitios / atracciones hechas para sacarle dinero a los viajeros (por ejemplo, pseudotours, restaurantes, falsos sitios de interés, etc)`],
    'sacarle dinero': ['sacarle dinero', 'quitarle dinero', 'estafar'],
    'suelen ser': ['suelen ser', 'son', 'generalmente son', 'pueden ser', 'llegan a ser'],
    'razones': ['razones', 'causas', 'causas principales', 'causas más comunes'], 
    'En cuanto': ['En cuanto', 'En el caso', 'Para el caso'],
    'al día': ['al día', 'por día', 'diarios'],
    'hospedaje': ['hospedaje', 'alojamiento'],
    'impedimento': ['impedimento', 'obstáculo', 'problema'],
    'este tipo': ['este tipo', 'esta clase', 'esta categoría'],
    'un tope máximo': ['un tope máximo', 'un límite máximo', 'un máximo', 'una cantidad máxima'],
    'tener en cuenta': ['tener en cuenta', 'tener en consideración'],
    'la época en la que que se viaje': ['la época en la que se viaje', 'la temporada', 'la época del año', 'la época del año en la que se viaje', 'la temporada en la que se haga el viaje'],
    'semanales':['semanales', 'a la semana', 'por semana'],
    'En cuanto a viajes de lujo': ['En cuanto a viajes de lujo','Para los viajes de lujo', 'En el caso de los viajes de lujo', 'Respecto alos viajes de lujo', 'Mientras tanto, para viajes de prespuesto alto o de lujo', "Para el tema de viajes de lujo"],
    'por lo general': ['por lo general', 'en general', 'generalmente', 'en la mayoría de los casos', 'normalmente'],
    'Por lo general': ['Por lo general', 'En general', 'Generalmente', 'En la mayoría de los casos', 'Normalmente'],
    'están en el lugar adecuado':['están en el lugar adecuado', 'estás en el sitio correcto', 'estás en el sitio perfecto', '‘estás en el lugar correcto’', 'este es tu sitio'], 
    'Lista general de precios':['Lista general de precios', 'Lista de precios', 'Presupuesto de un viaje', 'Presupuesto de viaje'],
    'Todos los precios dados':['Todos los precios dados', 'Todos los precios mostrados', 'Todos las cifras mencionadas', 'Todos las cifras dadas'],
    'basado en distintas fuentes': [`basado en distintas fuentes${randomWord(['',' (se irán actualizando)'])}`, `basado en diferentes fuentes${randomWord(['',' (se irán actualizando)'])}`],
}

function wordSpinner(word) {
    const wordArray = words[word]
    
    if(wordArray == undefined || wordArray == null){
        return word
    }

    //const random = Math.floor(Math.random() * wordArray.length)
    const random = Math.floor(Math.random() * wordArray.length)
    console.log(random)

    return wordArray[random]

}



//${randomWord([])}

const phraseGenerator = ({section, position, body}) => {
    const dataPhrase = {
        "intoduction":{
            "first":[
                "Fácilmente ___ es de las ciudades más sorprendentes que hay en el mundo. Por eso no es de extrañar que ____ esté en la lista de esos destinos imperdibles que todos deberían visitar.",
                "¿Quién no quiere visitar ___? Sin duda uno de los lugares preferidos para viajeros de todo tipo. Y no es para menos, nos ofrece una gran cantidad de cosas como",
                "No cabe duda que  ___ es uno de esos lugares que tienes que visitar alguna vez en esta vida, ya que ofrece __. Es decir, un sitio ideal para todo mundo.",
                "___ es una ciudad que todo viajero tiene que ir al menos alguna vez, no es para menos, nos ofrece / da cosas que en muy pocos otros lugares se pueden encontrar como",
                "___ es de esos destinos vibrantes y asombrosos que terminan cautibando / soprendiendo a cualquiera. Por esa razón lo podemos encontrar en decenas de blogs y guías de viajes listas interminables de cosas para hacer.",
                `___ es un destino que miles de turistas visitan ${randomWord(['cada año','todos los años'])}, y tampoco es una sorpresa, ya que nos da.`,
                "___ es conocida como una de las ciudades predilectas para viajar, gracias a la enorme cantidad de experiencias que uno puede vivir.",
                "____, sin duda uno de esos sitios que todo mundo debería de conocer antes de morir. Entre su gastronomía/cultura, paisajes, entretenimiento e historia, es de esos lugares que después de que los visitas, nunca los olvidarás.",
                "___ es una ciudad que no deja indiferente a nadie, en especial por...",
                `____ es de esos lugares que no necesitan ningún tipo de presentación. ${randomWord(["Para comprobarlo", "Para demostrarlo", ''])} Solo hay que ver la gran cantidad de referencias de ella en todas partes.`,
                `____ no necesita ningún tipo de presentación. ¿Quién no la conoce? Aun así ofrece una cantidad impresionante de cosas que incluso los mismos locales ni siquiera conocer.`,
                `____ es un vibrante/colorido/apasionante destino que es una mezcla _____. Es decir, es la amalgama perfecta para un viaje imperdible.`
            ],
            "last":[
                `Si tienes pensado viajar y quieres saber más de los precios de un viaje a___ ${wordSpinner('están en el lugar adecuado')}`,
                `Si tienes pensado viajar y quieres conocer más de los precios a ___ ${wordSpinner('están en el lugar adecuado')}`,
                `Si tienes pensado viajar y te gustaría saber más sobre cuánto cuesta un viaje a ____ ${wordSpinner('están en el lugar adecuado')}`,
                `Si estás planeando un viaje a ___ quieres saber más de los precios ${wordSpinner('están en el lugar adecuado')}`,
                `Si te estás preguntando ¿Cuanto cuesta un viaje a ___ ? ${wordSpinner('están en el lugar adecuado')}`,
                `Si estás aquí preguntándote ¿Cuánto vale un viaje a ___? ${wordSpinner('están en el lugar adecuado')}`,
            ]
        },
        "generaDescription":{
            "first":[
                `${randomWord(['¿Es posible viajar barato a___?', '¿Hay forma de viajar barato a___?'])} La respuesta ${randomWord(['a esta pregunta', ''])} es muy sencilla: ${randomWord(['por su puesto que se puede','por supuesto', 'sin duda'])}. ${randomWord(['Eso sí', 'Aunque tienes que tener en cuenta'])}`,
                `Los precios para viajar a **Destination** (varían / no varian / se mantinene) durante el año, por lo tanto, ${randomWord(['lo ideal es','lo recomendable es', 'lo mejor es'])} viajar ${randomWord(['durante', 'en', 'para'])}`,
                `${randomWord(['En cuanto al', 'Respecto al', 'Por el', 'Sobre el'])} tema de precios, **Destination** es un destino de precio relativamente alto/bajo, así que (puede haber muchos cambios en los precios / los precios no cambian tanto, los precios se mantienen mas o menos igual) `,
                `**Destination** es un destino que tradicionalmente (tiene precios altos / tiene precios bajos), por lo tanto, ${randomWord(['lo ideal es','lo recomendable es', 'lo mejor es'])} viajar ${randomWord(['durante', 'en', 'para'])}`,
                `Si vas a ${randomWord(['realizar un', 'hacer un', 'planificar'])} viaje a **Destination**, debes tener en cuenta que los precios (varían / no varian / se mantinene) durante el año, por lo tanto, ${randomWord(['lo ideal es','lo recomendable es', 'lo mejor es'])} viajar ${randomWord(['durante', 'en', 'para'])}`,
                `${randomWord(['El tema de', 'El asunto de'])} los precios en **Destination** puede variar en función a muchos factores, pero de acuerdo a los datos recopilados, es un destino`
            ],
            "second":[
                `Los meses de temporada baja son ..., es decir, los precios suenen ser más altos en fechas... Mientras tanto, los de temporada alta`,
                `${randomWord(['Por lo general', 'En general', 'Comunmente'])}, los precios serán más baratos en los meses de ..., mientras que los meses de ... suelen ser  más caros.`,
                `Para viajes de turismo general, ${randomWord(['la temporada alta','la época de mayor demanda'])} es ..., mientras que la temporada baja es ...`,
                `En el caso de los viajes de turismo (vacaciones y placer), ${randomWord(['la temporada alta','la época de mayor demanda'])} es ..., mientras que la temporada baja está / es ...`,
            ],
            "third":[
                `Si quieres ${randomWord(['más información', 'más información detallada', 'más detalles'])} ${randomWord(['de los precios', 'con respecto a los precios', 'sobre los precios'])}, revisa las siguientes secciones`,
                `Para ${randomWord(['más información', 'más información detallada', 'más detalles'])}, te explicaremos todos los conceptos de los precios a continuación`,
                `Para ${randomWord(['entender mejor', 'conocer mejor', 'entender'])} los precios de **Destionation**, ${randomWord(['te compartimos','te daremos','te explicamos'])} los conceptos ${randomWord(['y los gastos a detalle','y las estimaciones', 'y las estimaciones a detalle'])} a continuación`,
            ]
        },
        "luxury":{
            "last":[
                `${wordSpinner('En cuanto a viajes de lujo')}, se consideran aquellos que inician desde los <b>${body?.day} ${wordSpinner('al día')}</b>, o unos  <b>${body?.week}</b> ${wordSpinner('semanales')}. Dentro de este presupuesto están incluidos todos los gastos básicos, no los extras.`,
                `${wordSpinner('En cuanto a viajes de lujo')}, el presupuesto base parte desde los  <b>${body?.day} ${wordSpinner('al día')}</b>, ${wordSpinner('es decir')}, o unos  <b>${body?.week}</b> ${wordSpinner('semanales')}. En el precio estimado ya se incluyen conceptos como el ${wordSpinner('hospedaje')} y el transporte`,
                `${wordSpinner('En cuanto a viajes de lujo')}, se puede decir que son todos aquellos que inician desde los <b>${body?.day}</b> ${wordSpinner('al día')}, ${wordSpinner('es decir')}, o unos  <b>${body?.week}</b> ${wordSpinner('semanales')}.`,
                `${wordSpinner('En cuanto a viajes de lujo')}, el presupuesto base parte desde los <b>${body?.day}</b> ${wordSpinner('al día')}, ${wordSpinner('es decir')}, unos <b>${body?.week}</b> ${wordSpinner('semanales')}. En el precio estimado mencionado ya se tienen contemplados conceptos como el ${wordSpinner('hospedaje')}, entretenimiento y transporte`
            ],
            "finish":[
                `${wordSpinner('Por lo general')} cuando se realizan viajes de ${wordSpinner('este tipo')}, los precios no suelen ser ningún ${wordSpinner('impedimento')} , así que el tope máximo dependerá del viajero.`,
                `Aclaración: ${randomWord(['en la cifras dadas', 'dentro de los precios dados', 'para la cifra de precios dada'])} no se incluyen gastos extras e imprevistos, solo conceptos básicos como ${wordSpinner('hospedaje')} y entretenimiento.`,
                "Asimismo, los viajes de presupuesto alto pueden ser de distintas categorías, por ejemplo, los de «lujo» y «ultralujo». Aunque como referencia, vamos a tomar como base el precio mencionada anteriormente.",  
                `Para ${wordSpinner('este tipo')} de viajes no hay ${wordSpinner('un tope máximo')} en el presupuesto, sin embargo hay que  ${wordSpinner('tener en cuenta')} que los precios pueden variar según ${wordSpinner('la época en la que que se viaje')}.`,
                `Cuando ${randomWord(['son viajes de presupuesto alto', 'son viajes de lujo', 'son viajes sin un tope máximo en los gastos'])}, ${wordSpinner('por lo general')} no hay cambios en los precios de acuerdo a las fechas. Aun así, puede haber ligeras variaciones de acuerdo a la temporada en la que se viaje.`,
            ]
        }
    }

    const sectionWords = dataPhrase[section];
    if(!sectionWords) return console.error("No existe la sección")

    const phrase = sectionWords[position];
    if(!phrase) return console.error("No existe la posición")

    const length = phrase.length;
    const random = Math.floor(Math.random() * length);

    return phrase[random];
}