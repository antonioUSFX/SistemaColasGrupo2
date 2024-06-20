import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Especialidad = sequelize.define("Especialidad", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'especialidades',
    timestamps: false
  }
); 
