const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },

    interest: {
      type: String,
      default: "",
      maxlength: 120,
    },

    message: {
      type: String,
      default: "",
      maxlength: 800,
    },

    source: {
      type: String,
      default: "web",
      index: true,
    },

    contacted: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Índices útiles (ventas + auditoría)
LeadSchema.index({ createdAt: -1 });
LeadSchema.index({ source: 1, createdAt: -1 });

module.exports = mongoose.model("Lead", LeadSchema);
