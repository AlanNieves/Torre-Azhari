const { createLead } = require("./lead.service");
const { sendLeadNotification } = require("../../utils/mailer");

async function registerLead(req, res, next) {
  try {
    const { name, email, phone, interest, message, source } = req.validatedBody;

    const lead = await createLead({
      name,
      email,
      phone,
      interest,
      message,
      source,
    });

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
}

module.exports = { registerLead };
