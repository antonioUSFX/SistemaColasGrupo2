import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Ticket = sequelize.define(
  "ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numeroEnCola: {
      type: DataTypes.INTEGER,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    estado: {
      type: DataTypes.STRING,
    },
    idEspecialidad: {
      type: DataTypes.INTEGER,
      references: {
        model: 'especialidades', // Name of the Especialidad table
        key: 'id'
      }
    },
    idTipoTicket: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tipotickets', // Name of the TipoTicket table
        key: 'id'
      }
    },


  }, {
    tableName: 'tickets',
    timestamps: false
  }
);
