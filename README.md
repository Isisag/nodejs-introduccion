#### -D 
es para que se instale como dev depencies
crea un key llamada DevDependecies
`npm i nodemon -D` instala nodemon como una dependencia de desarrollo

### x.y.z
cambios-mayores . cambios-menores . bugs-pequeños

- no es recomendable utilizar el caret **^** para produccion.
- es mejor colocar la ondita **~** para indicar que queremos una version exacta

#### package-lock
dependencias con versiones 

####  -r 
argumento -r 
-r dotenv/config 
para implementar la dependencia dotenv 

# CLASE 2

### Metodos HTTP

- Verbos HTTP => all, get, post, put,delete,patch, options, head

- ## get: traer
- ## post: guardar
- ## put: sobrescribir por completo
- ## delete: borrar
- ## patch: actuliazar de manera parcial

### **CRUD definicion**
- #### create - Post
- #### read - get
- #### update - put,patch
- #### delete - delete

Autenticacion Y Autentificacion
autorización = permisos, autenticación = identidad

### NBD
N - NETWORK
B - BUSINESS
D - DATA

# CLASE 3 

### Mongo db
base de datos basada en documentos - Documentos json

Los documentos se llaman
**Javascript : JSON | Mongo: BSON**

Se manejan los datos de manera eriquecida (de manera binaria)

Se deben traducir de JSON a BSON 
_es el equivalente a usar un hashmap en Java_

### NODE_ENV 

= local | = dev | 