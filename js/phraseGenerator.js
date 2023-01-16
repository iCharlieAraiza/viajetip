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
    'trampas de turistas': ['«trampas de turistas»', '«trampas para turistas»' , `«trampas de turistas» o sitios / atracciones hechas para sacarle dinero a los viajeros (pseudotours, restaurantes, falsos sitios de interés, etc)`],
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

const randomWord = (wordList) => {
    const random = Math.floor(Math.random() * wordList.length)
    return wordList[random]
}



const phraseGenerator = ({section, position, body}) => {

    const dataPhrase = {
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