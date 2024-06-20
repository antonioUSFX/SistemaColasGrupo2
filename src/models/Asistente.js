import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Asistente = sequelize.define(
  "asistente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    ci: {
      type: DataTypes.STRING,
    },
    celular: {
      type: DataTypes.STRING,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'asistentes',
    timestamps: false
  }
);
