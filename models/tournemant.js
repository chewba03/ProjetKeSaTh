const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Tournemant extends Model {}

Tournemant.init(
  {
    idTour:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true,
        
    },
    Tname:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    Tournemant_prize:DataTypes.STRING,

  },
  {
    sequelize: connection,
  }
);

module.exports = Tournemant;