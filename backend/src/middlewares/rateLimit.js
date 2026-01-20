//evita spams y ataques tontos a los endpoints /leads
const rateLimit = require('express-rate-limit'); //middlewaree oficial para rrate limiting

module.exports = rateLimit({      //exportar middle ya configurado
    windowMs: 15 * 60 * 1000,   //ventana de 15 minuitos 
    limit: 100, //maximo 100 requests por IP por ventana
    standardHeaders: true, //Devuelve headers estandar RateLimit-*
    legacyHeaders: false, //Desactiva headers antiguos (menos ruido)
});