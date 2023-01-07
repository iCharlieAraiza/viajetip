const currenciesList = []

async function getCurrencies() {
    const currencies = await fetch('http://www.floatrates.com/daily/usd.json')
    const json = await currencies.json()
    for (const key in json) {
        currenciesList.push({
            'code': key,
            'name': json[key].name,
            'rate': json[key].rate,

        })
    }
    return currenciesList;
}




