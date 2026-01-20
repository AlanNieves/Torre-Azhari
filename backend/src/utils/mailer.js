const nodemailer = require('nodemailer');         // Librería para enviar emails vía SMTP

let transporter = null;                           // Cache del transporter (no lo recrees cada request)

function getTransporter() {                       // Función interna para obtener/crear transporter
  if (transporter) return transporter;            // Si ya existe, reutilízalo (más eficiente)

  transporter = nodemailer.createTransport({      // Crea el cliente SMTP
    host: process.env.SMTP_HOST,                  // Host SMTP desde env
    port: Number(process.env.SMTP_PORT || 587),   // Puerto SMTP (587 típico)
    secure: false,                                // false porque 587 usa STARTTLS (no SSL directo)
    auth: {                                       // Credenciales SMTP
      user: process.env.SMTP_USER,                // Usuario SMTP
      pass: process.env.SMTP_PASS,                // Password SMTP (ideal: app password)
    },
  });

  return transporter;                             // Devuelve el transporter listo
}

exports.sendLeadNotification = async (lead) => {  // Exporta función para notificar a ventas
  if (process.env.SEND_EMAIL !== 'true') return;  // Si flag apagado, no hacemos nada (clave)
  const to = process.env.SALES_NOTIFY_TO;         // Destinatario (ventas)
  if (!to) return;                                // Si no hay destinatario, no envíes nada

  const t = getTransporter();                     // Obtiene transporter (cacheado)

  await t.sendMail({                              // Envía el correo
    from: process.env.SMTP_USER,                  // Remitente
    to,                                           // Destinatario
    subject: `Nuevo lead - Torre Azaria: ${lead.name}`, // Asunto con nombre del lead
    text:                                         // Contenido texto (simple y efectivo)
      `Nuevo lead recibido:\n\n` +
      `Nombre: ${lead.name}\n` +
      `Email: ${lead.email}\n` +
      `Teléfono: ${lead.phone}\n` +
      `Interés: ${lead.interest}\n` +
      `Fuente: ${lead.source}\n` +
      `Fecha: ${new Date().toISOString()}\n`,
  });
};
