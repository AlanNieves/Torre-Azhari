exports.isEmail = (email) =>                      // Exporta validador simple de email
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(              // Regex: algo@algo.algo (suficiente para leads)
    String(email || '').trim()                    // Convierte a string y quita espacios
  );

exports.cleanPhone = (phone) =>                   // Limpia teléfono para guardar consistente
  String(phone || '')                             // Asegura string
    .replace(/[^\d+]/g, '')                       // Quita todo excepto dígitos y '+'
    .trim();                                      // Quita espacios

exports.cleanText = (value) =>                    // Limpia texto general
  String(value || '')                             // Asegura string
    .trim();                                      // Quita espacios al inicio/fin
