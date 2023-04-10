const sequelize = require("../../DBconnection.js");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}                   //Creating model by extending Model

User.init(                                    //Define the Schema object
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    phone:{
      type: DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    favourite:{
      type:DataTypes.BOOLEAN,
      allowNull:true
    },
    // user_id:{
    //   type:DataTypes.INTEGER,
    //   allowNull:false
    // }
  },
  {
    sequelize,
    modelName: "Contact",
    tableName: "userContacts",
  }
);

module.exports = User;
