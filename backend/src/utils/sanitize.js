const sanitizeHtml = require("sanitize-html");
const { containsMaliciousContent } = require("./security");

const BLOCKED_PROTOCOLS = /^(javascript|data|vbscript):/i;

function sanitizePlainText(value, { max = 255, field = "field" } = {}) {
  if (typeof value !== "string") return "";

  let clean = value.trim();

  // 🚨 Bloqueo explícito de payloads maliciosos
  if (containsMaliciousContent(clean)) {
    const e = new Error(`Contenido malicioso detectado en ${field}`);
    e.statusCode = 400;
    e.code = "MALICIOUS_INPUT";
    throw e;
  }

  // 🧼 Limpieza de HTML residual
  clean = sanitizeHtml(clean, {
    allowedTags: [],
    allowedAttributes: {},
  });

  // 🧹 Bloqueo de protocolos peligrosos
  clean = clean.replace(BLOCKED_PROTOCOLS, "");

  // Normalización básica
  clean = clean.replace(/\s+/g, " ").trim();

  if (clean.length > max) {
    clean = clean.slice(0, max);
  }

  return clean;
}

function sanitizeEmail(email) {
  if (typeof email !== "string") return "";
  return email.trim().toLowerCase();
}

function sanitizePhone(phone) {
  if (typeof phone !== "string") return "";
  return phone.replace(/[^\d+]/g, "");
}

module.exports = {
  sanitizePlainText,
  sanitizeEmail,
  sanitizePhone,
};
