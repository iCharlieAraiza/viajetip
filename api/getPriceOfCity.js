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
    else if(text.includes("Water (0.33 liter bottle)")) {
        return ['water', val.innerText]
    } 
    else if(text.includes("Cigarettes 20")) {
        return ['cigarettes', val.innerText]
    } 
    else if(text.includes("of Wine")) {
        return ['wine', val.innerText]
    } 
    else if(text.includes("Milk")) {
        return ['milk', val.innerText]
    } 
    else if(text.includes("Eggs")) {
        return ['eggs', val.innerText]
    } 
    else if(text.includes("Apples")) {
        return ['apples', val.innerText]
    } 
    else if(text.includes("Internet")) {
        return ['internet_domestic', val.innerText]
    } 
    else if(text.includes("Apartment (1 bedroom) in City")) {
        return ['aparment_sm_center', val.innerText]
    } 
    else if(text.includes("Fitness Club")) {
        return ['gym', val.innerText]
    } 
    else if(text.includes("Cinema")) {
        return ['cinema', val.innerText]
    } 
    else if(text.includes("Taxi 1km")) {
        return ['taxi_1km', val.innerText]
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


/*
    Add temperature of city
    IMPORTANT:
    - Add '.temperature_table' class to table
*/ 

const month = []
const temperatureTable = document.querySelectorAll('.temperature_table tr')

temperatureTable.forEach((tr) => {
    const td = tr.querySelectorAll('td')
    const monthName = td[0].innerText
    const weatherData = {}
    weatherData['month'] = td[0].innerText
    weatherData['max'] = Math.round((td[1].innerText - 32)/1.8)
    weatherData['min'] = Math.round((td[2].innerText - 32)/1.8)
    weatherData['rain'] = Math.round(td[3].innerText * 2.54)
    month.push(weatherData)
})


/*
    Add spcific information about city
    IMPORTANT:
    - Add '.specific_[name]' class to div
*/ 

const transport = document.querySelector('.specific_transport')
const li = transport.querySelectorAll('li')  
const transportData = []

li.forEach((li) => {
    const title = li.querySelector('.cost-tile-label').innerText
    const price = li.querySelector('.cost-tile-value').innerText
    const data = {}
    data['title'] = title
    data['price'] = price
    transportData.push(data)
})

/*
    Add spcific information about city
    IMPORTANT:
    - Add '.specific_[name]' class to div
    budgetyourtrip.com
*/ 

const food = document.querySelector('.traditional_food')
const li_food = food.querySelectorAll('li')  
const foodData = []

li_food.forEach((li) => {
    const title = li.querySelector('.cost-tile-label').innerText
    const price = li.querySelector('.cost-tile-value').innerText
    const data = {}
    data['title'] = title
    data['price'] = price
    foodData.push(data)
})

/*
    Add entertainment information about city
    IMPORTANT:
    - Add 'entertainment' class to table
*/ 

const entertainment = document.querySelector('.entertainment')
const liEntertainment = entertainment.querySelectorAll('li')
const entertainmentData = []

liEntertainment.forEach((li) => {
    const title = li.querySelector('.cost-tile-label').innerText
    const price = li.querySelector('.cost-tile-value').innerText
    const data = {}
    data['title'] = title
    data['price'] = price
    entertainmentData.push(data)
})


/*
    Daily price of city
*/
const main = document.querySelector('.main')
const type ={}
const daily = {}
daily.main = main.querySelector('.cost-tile-value').innerText
type['general'] = daily

/*
    Price of breakfast-dinner dinner - Table
    priceoftravel.com
    'food_description'
*/

const priceOfFood = document.querySelectorAll('.food tr')
const foodPrices = []

priceOfFood.forEach( (food, index) => {
    const el = {}
    el.title = food.children[0].innerText
    el.description = food.children[1].innerText
    el.price = food.children[2].innerText
    foodPrices.push(el)    
})

/*
    Price of hotels
    priceoftravel.com
    'hotel'
*/

const hotels = document.querySelectorAll('.hotels tr')
const hotelPrices = []

hotels.forEach( (hotel, index) => {
    const el = {}
    el.title = 'star-' + index
    el.price = hotel.innerText
    el.price = el.price.trim()
    
    hotelPrices.push(el)
})



/*
    Other price of city
*/

const other = document.querySelectorAll('.other li')
const type =[]
other.forEach((other) => {
    const title = other.querySelector('.cost-tile-label').innerText
    const price = other.querySelector('.cost-tile-value').innerText
    const data = {}
    data['title'] = title
    data['price'] = price
    type.push(data)
})  


