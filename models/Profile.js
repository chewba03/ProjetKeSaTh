const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Profile extends Model {}

Profile.init(
  {
    nickname:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    rank: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['bronze','gold','silver', 'plat', 'champion','Diamond']],
        },
      },
  },
  {
    sequelize: connection,
  }
);