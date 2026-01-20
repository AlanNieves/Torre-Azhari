const { createLead } = require('./lead.service'); // Importa el service que crea el lead
const { sendLeadNotification } = require('../../utils/mailer'); // Importa notificación opcional
const { isEmail, cleanPhone, cleanText } = require('../../utils/validator.js'); // Importa sanitizadores/validadores

class HttpError extends Error {                   // Clase de error con statusCode (para el errorHandler)
  constructor(message, statusCode) {              // Constructor con mensaje y código
    super(message);                               // Llama al constructor de Error
    this.statusCode = statusCode;                 // Guarda status para responder correcto
  }
}

exports.registerLead = async (req, res, next) => {// Exporta handler del endpoint POST /api/leads
  try {                                           // Try/catch para pasar errores al middleware
    const name = cleanText(req.body.name);        // Sanitiza nombre
    const email = cleanText(req.body.email).toLowerCase(); // Sanitiza email y lo normaliza
    const phone = cleanPhone(req.body.phone);     // Limpia teléfono a formato consistente
    const interest = cleanText(req.body.interest);// Sanitiza interés
    const source = cleanText(req.body.source) || 'web'; // Usa source si viene, si no "web"

    if (!name || name.length < 2)                 // Validación mínima de nombre
      throw new HttpError('Nombre inválido', 400);// Error 400 si no cumple

    if (!isEmail(email))                          // Valida email con regex simple
      throw new HttpError('Email inválido', 400); // Error 400

    if (!phone || phone.length < 8)               // Valida que el teléfono tenga longitud razonable
      throw new HttpError('Teléfono inválido', 400); // Error 400

    const lead = await createLead({               // Crea lead en DB
      name, email, phone, interest, source        // Guarda campos ya sanitizados
    });

    await sendLeadNotification(lead);             // Notifica ventas si SEND_EMAIL=true

    return res.status(201).json({                 // Respuesta HTTP 201 (creado)
      success: true,                              // Bandera de éxito
      message: 'Lead registrado correctamente',   // Mensaje para frontend
    });
  } catch (err) {                                 // Captura errores
    return next(err);                             // Los manda al errorHandler global
  }
};
