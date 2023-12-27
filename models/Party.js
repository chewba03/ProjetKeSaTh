const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Party extends Model {}

Party.init(
  {
    idParty:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true,
        
    },
    link:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    idUser:{
        type: DataTypes.INTEGER,
        allowNull: false,
        References:{
          Model: 'User',
          key: "idUser",
        },
    }
        
    
   
},
    {
    sequelize: connection,
    }
);

Party.belongsTo(User,{
    foreignKey: 'idUser',
  });

module.exports = Party;