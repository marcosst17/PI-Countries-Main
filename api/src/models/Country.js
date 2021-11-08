const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
      get(){
        return this.getDataValue('area') + " Km2";
      }
    },
    population: {
      type: DataTypes.INTEGER,
    },
    timezone: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      get(){
        return this.getDataValue('timezone').join(", ")
      }
    },
    coatOfArms: {
      type: DataTypes.STRING,
    },
    borders: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    landLocked: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
};
