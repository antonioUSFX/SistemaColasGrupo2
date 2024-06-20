import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Consultorio = sequelize.define(
  "consultorio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.INTEGER,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.STRING,
      defaultValue: "desocupado",
    },
    idEspecialidad: {
      type: DataTypes.INTEGER,
      references: {
        model: 'especialidades', // Name of the Consultorio table
        key: 'id'
      }
    }
  }, {
    tableName: 'consultorios',
    timestamps: false
  }
);
