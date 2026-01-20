const app = require('./app');                     // Importa la app ya configurada
const { loadEnv } = require('./config/env');      // Carga y valida variables de entorno
const { connectDB } = require('./config/db');     // Conecta a MongoDB

(async () => {                                    // IIFE async para usar await al inicio
  loadEnv();                                      // Carga .env y valida MONGO_URI
  await connectDB();                              // Conecta a la base antes de levantar servidor

  const PORT = process.env.PORT || 5000;          // Usa PORT del entorno o default 5000
  app.listen(PORT, () =>                          // Levanta servidor HTTP
    console.log(`Backend running on port ${PORT}`)// Log de confirmación
  );
})();
