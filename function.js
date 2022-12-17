// !funciones
// las funciones tienen que tener un nombre, las funcionas resumen codigo y podemos llamarlas cuando queramos
// 1.Definimos la funcion

function pepe(){
    console.log("Estoy en peligro");
}
// 2.LLamamos a la funcion, 

pepe();
pepe();
pepe();

function printUbication(ubication){
    console.log("estoy en", ubication);
}

printUbication("Madrid");
printUbication("Barcelona");

// Puedo pasar dos parametros o los que quiera

function printUbication(ubication,hour){
    console.log("Estoy en", ubication);
    console.log("Y son las", hour);
}

printUbication("Caceres","18horas");

// RETURN
// Nos puede devolver un dato
// Segundo: Corta la ejecucion de una funcion.Cuando se ejecuta return, se termina la funcion, por ejemplo

function buyBitCoin(pago){
    // Cuando pongo! significa que no tengo pago, y lo mejor es negar siempre las condiciones
    if(!pago){
        return "Debes pagar lo que quieres comprar"
    }

    const bitcoinPrice=13;
    const devolucion = pago -bitcoinPrice;
    console.log("Gracias, recibo tus " + pago + " euros y te devuelvo"+ devolucion + "euros de cambio");

    return devolucion;
    console.log("Todo lo que este debajo del return no sirve para nada");

}
console.log(buyBitCoin());

// ejemplo2:

function comprarLeche(dinero){
const precioLeche =2;
const cambio= dinero- precioLeche;

return cambio;
//la funcion de abajo console.log nunca de ejecutara porque
// antes hubo un return por tanto corta la funcion

console.log("Soy el guardia civil parese");
};

console.log(comprarLeche(10));