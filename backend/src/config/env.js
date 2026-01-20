const doteenv = require('dotenv'); //para leer variables desde un archivo .env

exports.loadEnv = () => { //exporta una funcion que se ejecuta al arrancar el server 
    doteenv.config(); //lee .env y lo carga a process.env

    if(!process.env.MONGO_URI) { //si no hay mongo el backend no puede fuincionar 
        throw new Error('Missing MONGO_URI in .env'); //fallamos rapido con mensaje claro
    }
}