const { nanoid } = require("nanoid")

const articles = [
    {
        id: nanoid(),
        name: "Laptop",
        brand: "Dell",
        description:"laptop color negro",
        price: "20.000",
    
    },
    {
        id: nanoid(),
        name: "Audifonos",
        brand: "HP",
        description:"audifonos headset",
        price: "10.000",
    
    }
]

module.exports = articles;


/**
 * todo: cada usuario deberia tener una lista de productos 
 * todo: cada producto debería tener -> id, nombre, marca, descripcion, valor, stock, cantidad, 
 * *con nanoid se va a generar un id único por cada producto lo que sería un problema para la cantidad
 * todo: para el atributo cantidad si se repite el id debería aumentarse la cantidad, partiendo en 1
 * 
 * para el ruteo de los articulos se podria usar la misma ruta de usuario ya que vamos a tener articulos 
 * 
 */