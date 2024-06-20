import app from './app.js';
import { sequelize } from './database.js';
import './models/relaciones.js'; // Importa relaciones para que se ejecuten

const PORT = 3000; // Cambia el puerto a 3001

async function main() {
  try {
    await sequelize.sync();
    // await sequelize.sync({ force: true});
    // console.log("Database synced successfully.");

    app.listen(PORT, () => {
      console.log(`Server on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
