function validateBody(schema) {
  return function (req, res, next) {
    try {
      const result = schema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Datos inválidos",
            details: result.error.issues.map((i) => ({
              field: i.path.join("."),
              message: i.message,
            })),
          },
        });
      }

      req.validatedBody = result.data;
      next();
    } catch (err) {
      // ✅ Cualquier excepción en transforms/sanitize => 400 (no 500)
      return res.status(400).json({
        success: false,
        error: {
          code: "MALICIOUS_INPUT",
          message: err?.message || "Entrada inválida",
          details: [],
        },
      });
    }
  };
}

module.exports = { validateBody };