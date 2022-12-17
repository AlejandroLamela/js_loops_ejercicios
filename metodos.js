// ! UNSHIFT
// Añade elemento al principio del array, puede añadir uno o mas
const mascotas=["mia","tokio","firulais","tronco","nano","mus","mortimer","mel","luffy"];
mascotas.unshift("Floky","Leia");
console.log(mascotas);

// ! CONCAT
// concat lo que hace es conctenar dos arrays, pero tenemos que decalrarla a una variable
// para luego llamarla

const students=["Joan","Victor","marcos"];
const concate = students.concat(mascotas);

console.log(concate);

// !JOIN
// El join sirve para meter algun caracter, una , una x o lo que queramos entre cada elemento del 
// array indicado
console.log(mascotas.join(','));

// !SLICE
// El slice tiene un indice de entrada y uno de salida, por ejemplo aqui corta el elemento
// del indice 1 hasta el 2, el tercer indice no lo corta

console.log(mascotas.slice(1,3));
// [ 'Leia', 'mia' ]

// !INDEXOF
// queremos saber donde esta un elemto dentro de un array, si pone que es 0 es que no existe en el array

console.log(mascotas.indexOf("firulais"));
// 4

// ! COMO SABER SI UN ELEMENTO ES UNICO EN UN ARRAY?
const search = "tokio";
const first= mascotas.indexOf(search);
const last=mascotas.lastIndexOf(search);
console.log(first === last);
// lastindexof devuelve la ultima posicion del elemento y el indexof dice la posicion primera del elemtno
// Si es true significa que solo hay una posicion del elemento, por tanto no es repetido y si es false pues esta repetido

// ! INCLUDES
// sirve para saber si un array tiene un elemento 

console.log(mascotas.includes("Pepe"));

// !QUEREMOS SABER CON LA FUNCION INCLUDES SI TENEMOS EL ELEMENTO NANO
// ! LA COSA ES QUE A VECES NO SABEMOS SI EL (ELEMENTO QUE BUSCAMOS ESTA EN MAYUSCULAS O MINUSCULAS
// la clave es pasarlo todo a minusculas para facilitar la busqueda
// 1. paso pasarlo todo a string
const stringed = mascotas.join("ajisfbaijfj");
console.log(stringed);
// 2.ahora lo pasamos todo a minusculas

const lower = stringed.toLowerCase();
console.log(lower);

// 3.ahora eliminamos la cadena que añadimos con join

const mascotasLower = lower.split("ajisfbaijfj");
console.log(mascotasLower);

// 4.Ahora buscamos si nano esta en el array

console.log(mascotasLower.includes("nano"));


// !INCLUDES
// ES UN Metodo que sirve para buscar un elemento dentro de un array

const cities= ["Madrid", "Lugo", "Pamplona" ];

console.log(cities.includes("Lugo"));

// !SPLICE
// splice sirve para eliminar uno o varios elementos de un array y si queremos podemos sustituirlos por uno o mas elementos
// su sintaxis es asi: 
// ponemos el nombre del array con un . Ej: moderatIII.
// a continuacion ponemos splice()
// y dentro de splice(index,borrar,agregar). Agregar es obtativo, no hace falta ponerlo, index es el numero del array donde queremos empezar a trabajar
// y si no queremos borrar nada ponemos un 0 

const moderatIII = ["Abel", "Pepe", "Lourdes", "Joa", "Noemi", "Rafa"]
// Quiero eliminar lourdes y joao
moderatIII.splice(2,2);
console.log(moderatIII); //[ 'Abel', 'Pepe', 'Noemi', 'Rafa' ]

// Si solo queremos mostrar o trabajar con los elementos borrados hacemos asi:
 console.log(moderatIII.splice(2,2)); //[ 'Noemi', 'Rafa' ]
// y si queremos meterlo en un array nuevo haria asi:
const nombres= moderatIII.splice(2,2);
console.log(nombres);
// Ahora quiero añadir un elemento mas
moderatIII.splice(2,0,"Marcos");
console.log(moderatIII);

// ! ENCONTRAR ELEMENTOS DE OBJETO O SI EXISTEN ESTOS OBJETOS DENTRO DE MI ARRAY ( FINDINDEX OR FIND)
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
// 1.Creamos una variable donde guardemos el return de nuestra funcion. En este caso la variable sera const o
// llamamos a nuestro array con la fuuncion Ej: placesTotravel.find()
// Dentro de los parentesis metemos una funcion flecha Ej: () 

 const o = placesToTravel.find( (element) => {
return element.id === 5;

})
console.log(o);

// Si queremos saber el indice de un elemento hacemos esto
const indiceO = placesToTravel.findIndex( (index) => {
    return index.id === 11;
    
    })
    console.log(indiceO);