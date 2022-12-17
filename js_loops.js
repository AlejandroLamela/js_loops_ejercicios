// !Iteración #1: Usa includes SI
// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (const product of products) {
   if(product.includes("Camiseta")){
    console.log(product);
    

   } else{
    console.log("no es camiseta");
   }
}

// !Iteración #2: Condicionales avanzados SI
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la 
// propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
// Puedes usar este array para probar tu función:

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let counter = 0;
for (const alumn of alumns) {
    
    switch (alumn.T1) {
        case true:
            counter++;
    }
    switch (alumn.T2) {
        case true:
            counter++;
    }
    switch (alumn.T3) {
        case true:
            counter++;
    }

    if(counter>=2){
alumn.isApproved=true;
    }else{
        alumn.isApproved=false;
    }


}

// !Iteración #3: Probando For...of SI
// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
// Puedes usar este array:

const plasesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const plaseToTravel of plasesToTravel) {
    console.log(plaseToTravel);
}

// !Iteración #4: Probando For...in SI**

// Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
   console.log(alien[key]);
}

//! **Iteración #5: Probando For SI**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan
//  el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


for (const placeToTravel of placesToTravel ) {
    if(placeToTravel.id===11){
        const position11 = placesToTravel.findIndex( (index) => {
            return index.id===11;
            });

        placesToTravel.splice(position11,1);
    } else if(placeToTravel.id===40){
const position40= placesToTravel.findIndex( (index) => {
return index.id===40;
} );

placesToTravel.splice(position40,1);
    }
    }
console.log(placesToTravel);

//! **Iteración #6: Mixed For e includes SI**

// Usa un bucle **for** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda 
// que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for (const toy of toys) {
        // console.log(toy.name.includes("gato"));
        if(toy.name.includes("gato")){
            
    

        }
    }
console.log(toys);


//! **Iteración #7: For...of avanzado SI**

// Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) 
// al array popularToys. Imprimelo por consola.. Puedes usar este array:

const popularToys = [];
const toys1 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

const positions_plus_15=[];

for (const toy1 of toys1) {
    if(toy1.sellCount>15){
        let position_15 = toys1.findIndex( (index) => {
            return index.sellCount>15;
            });
            positions_plus_15.push(position_15);
        

    }else{
        console.log("no tiene 15");
    }
}
