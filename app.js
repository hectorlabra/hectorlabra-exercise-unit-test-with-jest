// fromEuroToDollar ->

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


// fromDollarToYen ->


// declaramos una funcion con el mismo nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a Yen
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}

// fromYenToPoun ->


// declaramos una funcion con el mismo nombre "fromYenToPound"
const fromYenToPound = function(valueInYen){
    
    // convertimos el valor a Pound
    let valueInPound = (valueInYen * 0.8)/127.9
    // retornamos el valor
    return valueInPound;
}




// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };