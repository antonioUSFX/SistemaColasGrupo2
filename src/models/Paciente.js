import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Paciente = sequelize.define(
  "paciente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    ci: {
      type: DataTypes.STRING,
    },
    celular: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    tipo: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'pacientes',
    timestamps: false
  }
);
