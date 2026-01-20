module.exports = (err, req, res, next) => { //middleware de error: express lo detecta por 4 args
    console.error(err); //log de error en prod

    const status = err.statusCode || 500; //usa statusCode si lo definimos, si no 500
    res.status(status).json ({ //responde JSAON consistente
        success: false,  //bandera estandar
        message: err.message || 'Internal Server Error', //mensaje seguro

    });

};