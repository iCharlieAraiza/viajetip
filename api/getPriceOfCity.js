const tr = document.querySelectorAll('tr')
const object = {}

function getObject(el, val) {
    if( el == undefined){
        return null;
    }

    const text = el.innerText

    if(text.includes("Meal, Inexpensive Restaurant")) {
        return ['regular_meal', val.innerText]
        
    }else if(text.includes("Coke/Pepsi ")) {
        return ['coke_pepsi', val.innerText]
    } else if(text.includes("McMeal at McDonalds")) {
        return ['mcdonalds', val.innerText]
    } 
    else if(text.includes("Domestic Beer")) {
        return ['domestic_beer', val.innerText]
    } 
    else if(text.includes("Cappuccino")) {
        return ['cappuccino', val.innerText]
    } 
    else {
        return null;
    }
}

tr.forEach((tr) => {
    const td = tr.querySelectorAll('td')
    const response = getObject(td[0], td[1])
    if(response) {
        object[response[0]] = response[1]
    }
})