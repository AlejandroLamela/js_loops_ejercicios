// TIPOS DE DATOS
// para ejecutar nuestro codigo desde la terminal del visual studio tenemos que poner node + el nombre del archivo, en este caso variables.js
// ! 1.numericos
// ! los numericos son los enteros como decimales
let numerico=10;
// ! 2.string

let cadenaDeTexto = "El gato"; 
// cuando ponemos typeof nos dice que tipo de dato es
console.log("esto es mi numero " + typeof cadenaDeTexto);


// ! 3.boolean
// ! Puede ser true o false

let interruptor =true;
console.log("esto es mi tipo booleando " + typeof interruptor);

// Tipos de datos COMPLEJOS

// ! 4. array
// ! un array es una lista de elementos

let listaDeComidas = ["arroz","lechuga","pollo"];
console.log("esto es mi tipo array "+ typeof listaDeComidas);

// ! 5.OBJECT
// ! dentro del objeto tendremos otras variables

let juguete1={
nombre: "playmobil",
color:"negro",
altura:20,
haveGlasses:true,
ropas:["chaleco", "gorro", "pantalon"],
otroObjeto:{
casa:true
}
};

// ! function

function sumar(a,b) {
    return a+ b;
}

console.log("esto es mi tipo de funcion "+ typeof sumar);

// ! null

let nulo=null;
console.log("este null es de tipo "+ typeof nulo);

// ! const no me permite cambiar el valor de datos simples pero si me deja cambiar 
//! los valores interiores de arrays y objetos