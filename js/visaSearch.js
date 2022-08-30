/*
    Todo: 
    [] 1. Fetch country list from json file
    [] 2. Fetch visa requirements based on country from API
    [] 3. Display visa requirements in table 

*/


import {countries} from './data/countries.js';

import visa from './data/mexico.json' assert { type: "json" };;

const app = document.getElementById("app")

// GET: api/destinations/countries
const listOfCountries = Object.assign({}, ...countries.map(country => {
    return {[country.code]:country.name}
}));


// GET: api/destinations/mexico
const mexicoVisaRequirements = countries.filter(country => {
    return country.code === "MX"
})[0]

console.log(mexicoVisaRequirements)


// GET: api/visa/mexico
//console.log(visa.requirements[0])

const required = []
const notRequired = []
const onArrival = []
const electronic = []

/*
for (const key in visa.requirements) {
    console.log(`${key}: ${visa.requirements[key].type}`);
}
*/

for (const key in visa.requirements) {
    //console.log(key)
    switch(visa.requirements[key].permission) {
        case 'required':
            required.push({'code': key,'info':visa.requirements[key]})
            break;
        case 'free':
            notRequired.push({'code': key,'info':visa.requirements[key]})
            break;
        case 'arrival':
            onArrival.push({'code': key,'info':visa.requirements[key]})
            break;
        case 'e':
            electronic.push({'code': key,'info':visa.requirements[key]})
            break;
        default:
            break;
    }
}

console.log(visa.requirements['ABKH'])

console.log(required)
console.log(notRequired)
console.log(onArrival)
console.log(electronic)



const contries = [];
const contryRows = document.querySelectorAll('.countryRow')

contryRows.forEach(row => {
    const contry = row.querySelector('.country a').textContent 
    if(contry !== "") {

        const check = row.querySelectorAll('.check');
        let required = '';
        check.forEach(check => {
            if(check.classList.contains('vr')) {
                required = check.childElementCount > 0 ? 'required' : required;
            } else if(check.classList.contains('vfa')) {
                required = check.childElementCount > 0 ? 'free' : required;
            } else if(check.classList.contains('voa')) {
                required = check.childElementCount > 0 ? 'on arrival' : required;
            } else if(check.classList.contains('eta')) {
                required = check.childElementCount > 0 ? 'eta' : required;
            } else if(check.classList.contains('vo')) {
                required = check.childElementCount > 0 ? 'visa online' : required;
            }
        })
        contries.push({name: contry, required})
    }
})

const countriesName = []
const url = []
const element = document.querySelectorAll('.col-4.col-md-2') 
element.forEach(element => {
    const contry = element.getAttribute('data-passport-title')
    countriesName.push(contry.toLowerCase())
})
countriesName.forEach(country => { 
    url.push(`https://visaindex.com/visa-requirement/${country}-passport-visa-free-countries-list/`)
} )



//console.log(element.getAttribute('data-passport-title'))
//?.getAttribute(data-passport-title)

for(let i = 0; i <10; i++) {
    console.log(contries[i])
}


app.innerHTML = 'hello world'




