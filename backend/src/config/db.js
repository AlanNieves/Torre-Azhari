//Aisla la conexion a DB como "infraestructura". El resto del codigo no debe saber como se conecta

const mongoose = require('mongoose'); //Impoerta mongoose, el cliente ODM para MongoDB

exports.connectDB = async () => { //Exporta una funcion asincronica para conectar a la DB
    try { //try/catch porque conexiones pueden fallar
        await mongoose.connect(process.env.MONGO_URI); //conecta usando la URI del entorno 
        console.log('MongoDB connected successfully'); //loguea exito
    } catch (error) {  //si algo sale mal
        console.error('MongoDB connection error:', error.message); //log del error
        process.exit(1); //cierra el proceso: sin DB no hay backend util
    }
};