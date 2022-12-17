// !OPERADORES TERNARIOS

array=[1,2,3]; 
// ESto vale 3

if(array.length ===5){
console.log("longitud de 5")
} else {
    console.log("longitud no es  5")   
}

// Esto es si lo queremos hacer en ternario, es lo mismo que el if de arriba
//  condicion ? si es true : si es false

array.length === 5 ? console.log("la longitud es 5") : console.log("la longitud no es 5");

// Tambien podemos hacerlo asi

console.log(array.length === 5 ? "true":"false");

// EJERCICIO 
const mayoriaDeEdad = 18;
const miEdad = 22;
const soyMayorDeEdad = miEdad >= mayoriaDeEdad ? "soy mayor de edad" : "no soy mayor de edad";
console.log(soyMayorDeEdad);