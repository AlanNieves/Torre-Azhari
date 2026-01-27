// Importamos mongoose para conectarnos a MongoDB
const mongoose = require('mongoose');

/**
 * Función para conectar a la base de datos MongoDB
 * Esta función es asíncrona porque la conexión a BD toma tiempo
 */
exports.connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);
    

    console.log('MongoDB connected successfully');
  } catch (error) {

    console.error('MongoDB connection error', error);
    

    process.exit(1);
  }
};
