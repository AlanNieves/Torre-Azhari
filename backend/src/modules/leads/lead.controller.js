const { createLead } = require("./lead.service");
const { sendLeadNotification } = require("../../utils/mailer");

exports.registerLead = async (req, res, next) => {
  try {
    const { name, email, phone, interest, source } = req.validatedBody;

    const lead = await createLead({
      name,
      email,
      phone,
      interest,
      source,
    });

    // 🔔 Notificación no bloqueante
    try {
      await sendLeadNotification(lead);
    } catch (notifyErr) {
      console.error("LEAD_NOTIFICATION_ERROR", notifyErr);
    }

    return res.status(201).json({
      success: true,
      message: "Lead registrado correctamente",
    });
  } catch (err) {
    next(err);
  }
};
