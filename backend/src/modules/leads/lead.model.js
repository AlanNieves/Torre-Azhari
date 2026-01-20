const mongoose = require('mongoose');             // Mongoose para definir schema/model

const LeadSchema = new mongoose.Schema(           // Crea el esquema de Lead
  {
    name: { type: String, required: true, maxlength: 120 }, // Nombre obligatorio, limita tamaño
    email: { type: String, required: true, lowercase: true, index: true }, // Email obligatorio, normaliza y indexa
    phone: { type: String, required: true, maxlength: 30 }, // Teléfono obligatorio
    interest: { type: String, default: '' },      // Interés opcional (inversión/vivir/etc)
    source: { type: String, default: 'web' },     // Fuente del lead (web, ig, ads)
    contacted: { type: Boolean, default: false }, // Ventas marcó si ya lo contactaron
  },
  { timestamps: true }                            // Crea createdAt/updatedAt automáticamente
);

LeadSchema.index({ createdAt: -1 });              // Índice para consultas por fecha (últimos primero)

module.exports = mongoose.model('Lead', LeadSchema); // Exporta el modelo para usarlo en services
