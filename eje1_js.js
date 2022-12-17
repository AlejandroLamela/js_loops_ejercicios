// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. 
// Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías
//  puedes ayudarte de la función .includes()

// Esto es un array, me da igual que lo de dentro sean objetos, en este array guardaremos todas las categorias
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
// 1.Creamos un nuevo array
const categories=[];
// 2.Tengo que acceder a las categorias
// el if con ! significa que si no se incluye ejecuta categorias
for(const movie of movies){
    // Aqui vamos a crear un bucle que nos saque cada pelicula de peliculas
    for(const categorie of movie.categories){
// Aqui vamos a crear un bucle que nso saque categorias de cada pelicula
        if(!categories.includes(categorie)){
            // comprobamos que no exista categorias dentro del array de nuestra categorias
            // y de no existir lo pusheamos,si ya existe no hacemos nada
           categories.push(categorie); 
        }
        
    }
}
console.log(categories);