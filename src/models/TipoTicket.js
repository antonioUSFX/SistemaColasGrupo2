import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const TipoTicket = sequelize.define(
  "tipoticket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'tipotickets',
    timestamps: false
  }
);
