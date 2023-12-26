const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Skin extends Model {}

Skin.init(
  {
    idSkin:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true,
        
    },
    Skin_name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    skin_prize:DataTypes.STRING,
    rarity: DataTypes.STRING,
    
  },
  {
    sequelize: connection,
  }
);

module.exports = Skin;