import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_UDvuJrp0hUx6uJ8tJnUuB0gY1exo75e5sPISSK53');



export async function convertCurrency(fromCurrency,toCurrency,units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier = res.data[toCurrency];
    
    return multiplier*units;
}
