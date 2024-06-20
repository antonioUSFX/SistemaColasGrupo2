import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Medico = sequelize.define(
  "medico",
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
    email: {
      type: DataTypes.STRING,
    },
    usuario: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    registroColMedico: {
      type: DataTypes.STRING,
    },
    idEspecialidad: {
      type: DataTypes.INTEGER,
      references: {
        model: 'especialidades', // Name of the Especialidad table
        key: 'id'
      }
    },

  }, {
    tableName: 'medicos',
    timestamps: false
  }
);
