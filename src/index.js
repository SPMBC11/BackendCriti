
import app from './app.js';
import { sequelize } from './models/Indexs.js';

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.sync({ force: false }); // Set to false to avoid data loss
    console.log('DB sincronizada');

    app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
  } catch (err) {
    console.error('Error al iniciar', err);
  }
})();
