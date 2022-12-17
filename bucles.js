// !METODOS BUCLES APLICADOS EN ARRAY
// Foreach sirve para 
const mascotas=["mia","tokio","firulais","tronco","nano","mus","mortimer","mel","luffy"];

mascotas.forEach(function(element){
    console.log("Mascota: ", element);
});

// ! FOR IN/FOR OF
// LOS dos son bucles que funcionan para recorrer un array o objeto
// El caso que vamos a utilizar mejor el for in para recorrer objetos y el for of para recorrer arrays
// Un objeto consta de key(Llaves), que son los tipos de propiedades que tiene mi objeto, en este caso
// nombre, edad,live y consta de unos values(valores), que en cada objeto variara, en este caso es
// javier,24 y true


const alumnos={
    nombre:"Javier",
    edad:24,
    live:true
}
for(let key in alumnos ){
console.log(key);
}
// Resultado:
// nombre
// edad
// live
// Explicacion:la variable key, la puedo llamar como quiera, pero esa variable hace referencia a las keys de mi objeto

for(let key in alumnos ){
    console.log(alumnos[key]);
    }
//Resultado:
//Javier
// 24
// true

// ! FOR OF
// lo utilizaremos para leer o itinerar por un array, NUNCA UN OBJETO
// nos devuelve cada elemento del array, NUNCA NOS OFRECERA EL INDICE DE CADA ELEMENTO
// o sea nunca sabremos en que indice estamos, ni podedremos cambiar el orden de oeejecucuion, para eso utilizaremos un for normal

const animales=["perro","gato", "cocodrilo","canario"];

for(let animal of animales){
console.log(animal);
}

// Resultado:
// perro
// gato
// cocodrilo
// canario

const colores= {
    azul:{grado:20,saturacion:23},
    rojo:{papa:2,saturacion:12},
    verde:{pe:2,saturacion:12}
}

for(let color in colores){
    console.log(color);
}

// !FOR 
// La variable index fuera del bucle no existe, se crea dentro del bucle
const pitufos=["papa pitufo", "pitufina", "gruñon", "gafotas"];

for (let index = 0; index < 5; index++) {
    
}

// !SWITCH
const superheroe=["batman","robin","supernenas"]
switch (superheroe) {
    case value:
        
        break;

    default:
        break;
}