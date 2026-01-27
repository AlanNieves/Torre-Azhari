const { z } = require("zod");
const validator = require("validator");
const {
  sanitizePlainText,
  sanitizeEmail,
  sanitizePhone,
} = require("../../utils/sanitize");

const SOURCE_WHITELIST = ["web", "ig", "ads", "meta", "google", "landing"];

const LeadCreateSchema = z
  .object({
    name: z.preprocess(
        (v) => {
            if(containsMaliciousContent(v)) {
                throw new Error("Contenido malicioso detectado");
            }
            return sanitizePlainText(v, { max: 120, field: "name"});
        },
        z.string().min(2, "Nombre muy corto").max(120, "Nombre muy largo")
    ),

    email: z.preprocess(
      (v) => sanitizeEmail(v),
      z.string().email("Email inválido").max(180)
    ),

    phone: z.preprocess(
      (v) => sanitizePhone(v),
      z.string().min(10, "Teléfono inválido").max(30)
    ),

    interest: z.preprocess(
      (v) => sanitizePlainText(v || "", { max: 80, field: "interest" }),
      z.string().max(80).optional()
    ),

    message: z.preprocess(
      (v) => sanitizePlainText(v || "", { max: 800, field: "message" }),
      z.string().max(800).optional()
    ),

    source: z.preprocess(
      (v) => sanitizePlainText(v || "web", { max: 40, field: "source" }),
      z
        .string()
        .refine((v) => SOURCE_WHITELIST.includes(v), "Source no permitido")
    ),
  })
  .strict();

module.exports = { LeadCreateSchema };