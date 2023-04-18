const sequelize = require("../../DBconnection.js");
const { DataTypes, Model } = require("sequelize");

class User extends Model {} //Creating model by extending Model

User.init(
  //Define the Schema object
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tokens: {
      // type: DataTypes.ARRAY(DataTypes.STRING),
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "userLogin",
  }
);

module.exports = User;
