const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class User extends Model {}

User.init(
  {
    idUser:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false,
        autoIncrement:true,
        
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32],
        is: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,32}/,
      },
    },

    role: {
      type: DataTypes.ENUM,
      values: ["admin", "user"],
      defaultValue: "user",
    },

    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    dob: DataTypes.DATE,
  },
  {
    sequelize: connection,
  }
);

User.addHook("beforeCreate", (user) => {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
});
User.addHook("beforeUpdate", (user, options) => {
  if (options.fields.includes("password")) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  }
});


module.exports = User;
