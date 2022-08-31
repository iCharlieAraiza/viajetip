import { readFile } from 'fs/promises'
import express  from 'express';

const app = express();


function prepareUri(string){
    return string.toLowerCase().replace(' ', '-')
  }



app.get('/v1/api/countries', (req, res)=> {
    getAllContries().then((countries) => {
        res.status(200).json(countries);
    })
})

app.get('/v1/api/visa/:country', (req, res)=> {
    getVisaRequirementsForCountry(req.params.country).then((visaRequirements) => {
        res.status(200).json(visaRequirements);
    }).catch((err) => {
        res.json(err);
    })
})


app.get('/v1/api/visa/:origin/:destination', (req, res)=> {
    getVisaRequirementsForCountry(req.params.country).then((visaRequirements) => {
        const response = visaRequirements.find(item=> item.country === req.params.destination);
        res.status(200).json(response);
    }).catch((err) => {
        res.json(err);
    })
})

/*

app.get('/api/visa', (req, res) => {    
    
    getAllContries().then((countries) => {
        res.statusCode(200).json(countries)
    }).catch((err) => {
        res.send(err);
    }).finally(() => {
        res.end();
    })
})
*/
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });

/*
getVisaRequirementsForCountry('argentina').then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('done');
})

*/

function getAllContries() {
    return new Promise((resolve, reject) => {
        readFile('./data/countries-list.json', 'utf8')
            .then((data) => {
                let res = JSON.parse(data);
                resolve(res);
            }).catch((err) => {
                reject(err);
            }
        );
    }
    );
}



async function getVisaRequirementsForCountry(country) {
    let visaList = await getVisaList(prepareUri(country));
    let visaRequirements = {};
    visaList.forEach((visa) => {
        visaRequirements[visa.country] = visa.required;
    }
    );
    return visaRequirements;
}



function getVisaList(country) {
    return new Promise((resolve, reject) => {
        readFile(`./data/visa/${country}-visa.json`, 'utf8')
            .then((data) => {
                let res = JSON.parse(data);
                resolve(res);
            }).catch((err) => {
                reject(err);
            }
        );
    }
    );
}




/*
const country = 'argentina';

const json = JSON.parse(
  await readFile(
    new URL(`./data/visa/${country}-visa.json`, import.meta.url)
  ).catch((err) => {
    console.log(err);
   }),
);

const visaRequired = json.filter((item) => item.required == 'visa_required');
const visaNotRequired = json.filter((item) => item.required == 'visa_free_access');
const eta = json.filter((item) => item.required == 'eta');
const visaOnline = json.filter((item) => item.required == 'visa_online');
const visaOnArrival = json.filter((item) => item.required == 'visa_on_arrival');

//console.log(visaOnArrival);


const destination = 'United States of America';
const destinationObject = json.find((item) => item.country == destination);
console.log(destinationObject.required);
*/