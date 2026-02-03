const app = require('./app');                     // App ya configurada
const { loadEnv } = require('./config/env');      // Carga y valida variables de entorno
const { connectDB } = require('./config/db');     // Conecta a MongoDB

(async () => {
  loadEnv();                                      // Carga .env
  await connectDB();                              // Conecta DB antes de levantar server

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Backend running on port ${PORT}`)
  );
})();
