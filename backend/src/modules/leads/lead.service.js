const Lead = require('./lead.model'); // Importa el modelo de Lead

exports.createLead = async (payload) => {   //exportar funcion para crear lead
    return Lead.create(payload); //insertar en Mongoi y devuelve el doc creado
}