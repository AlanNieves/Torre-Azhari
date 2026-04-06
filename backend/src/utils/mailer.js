const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

function generateLeadEmailHTML(lead) {
  const date = new Date(lead.createdAt || Date.now());
  const formattedDate = date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;">
  <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr style="background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%);">
            <td style="padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #fff; font-size: 24px; font-weight: 300; letter-spacing: 2px;">TORRE AZHARI</h1>
              <p style="margin: 8px 0 0 0; color: #ccc; font-size: 12px; letter-spacing: 1px;">NUEVO LEAD</p>
            </td>
          </tr>

          <!-- Alert Badge -->
          <tr>
            <td style="padding: 20px 30px; background-color: #fafafa; border-bottom: 1px solid #eee;">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="background-color: #4CAF50; color: #fff; padding: 12px 16px; border-radius: 4px; font-weight: 600; font-size: 13px; text-align: center;">
                    ✓ NUEVO PROSPECTO REGISTRADO
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <!-- Lead Info Section -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="margin-bottom: 30px;">
                    <h2 style="margin: 0 0 20px 0; color: #1e1e1e; font-size: 18px; font-weight: 600; border-bottom: 2px solid #eee; padding-bottom: 12px;">INFORMACIÓN DEL PROSPECTO</h2>
                  </td>
                </tr>

                <!-- Name -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 120px; color: #666; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Nombre:</td>
                        <td style="color: #1e1e1e; font-weight: 500; font-size: 14px;">${lead.name}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 120px; color: #666; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</td>
                        <td style="color: #1e1e1e; font-weight: 500; font-size: 14px;"><a href="mailto:${lead.email}" style="color: #1976d2; text-decoration: none;">${lead.email}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 120px; color: #666; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono:</td>
                        <td style="color: #1e1e1e; font-weight: 500; font-size: 14px;"><a href="tel:${lead.phone}" style="color: #1976d2; text-decoration: none;">${lead.phone}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Source -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 120px; color: #666; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Fuente:</td>
                        <td style="color: #1e1e1e; font-weight: 500; font-size: 14px;">${lead.source || 'web'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Date -->
                <tr>
                  <td style="padding: 12px 0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 120px; color: #666; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Fecha/Hora:</td>
                        <td style="color: #1e1e1e; font-weight: 500; font-size: 14px;">${formattedDate}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              ${lead.message ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                <tr>
                  <td style="margin-bottom: 20px;">
                    <h2 style="margin: 0 0 12px 0; color: #1e1e1e; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Mensaje:</h2>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #fafafa; padding: 16px; border-left: 3px solid #1e1e1e; border-radius: 2px; color: #333; font-size: 13px; line-height: 1.6;">
                    ${lead.message}
                  </td>
                </tr>
              </table>
              ` : ''}

            </td>
          </tr>

          <!-- Footer CTA -->
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 25px 30px; text-align: center; border-top: 1px solid #eee;">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="text-align: center; padding: 15px 0;">
                    <a href="mailto:${lead.email}" style="display: inline-block; background-color: #1e1e1e; color: #fff; padding: 12px 28px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 14px; letter-spacing: 0.5px;">
                      RESPONDER AL PROSPECTO
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer Info -->
          <tr style="background-color: #1e1e1e;">
            <td style="padding: 20px 30px; text-align: center; color: #999; font-size: 11px; line-height: 1.6;">
              <p style="margin: 0; color: #ccc;">Torre Azhari - Desarrollo Inmobiliario</p>
              <p style="margin: 4px 0 0 0;">Este es un correo automático, por favor no responda a este mensaje.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

exports.sendLeadNotification = async (lead) => {
  if (process.env.SEND_EMAIL !== 'true') return;
  const to = process.env.SALES_NOTIFY_TO;
  if (!to) return;

  const t = getTransporter();

  await t.sendMail({
    from: `"Torre Azhari" <${process.env.SMTP_USER}>`,
    to,
    subject: `Nuevo Lead: ${lead.name} - Torre Azhari`,
    html: generateLeadEmailHTML(lead),
    text: `Nuevo lead recibido:\n\nNombre: ${lead.name}\nEmail: ${lead.email}\nTeléfono: ${lead.phone}\nMensaje: ${lead.message || '(sin mensaje)'}\nFuente: ${lead.source || 'web'}\nFecha: ${new Date().toISOString()}`
  });
};

