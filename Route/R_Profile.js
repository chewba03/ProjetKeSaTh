const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Profile extends Model {}

Profile.init(
  {
    idUser:{
      type: DataTypes.INTEGER,
      allowNull: false,
      References:{
        Model: 'User',
        key: "idUser",
      },
      
  },
    nickname:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    rank: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['Bronze','gold','silver', 'plat', 'champion','Diamond']],
        },
      },
    },
  {
    sequelize: connection,
  }
);

Profile.belongsTo(User,{
  foreignKey: 'idUser',
});

module.exports = Profile;