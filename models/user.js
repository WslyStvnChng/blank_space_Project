module.exports = function(sequelize, DataTypes) {

// Requiring bcrypt for password hashing.
var bcrypt = require("bcrypt-nodejs");

  var User = sequelize.define("User", {
    email: {
      type: Datatypes.STRING,
      primaryKey: true,
      isUnique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Creating a custom method for our User model. This will check if an unhased password is entered
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  //Hooks are automatic methods that run during various phases of the User model lifecycle
  //Before User is created, it will automatically hash their password
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  //Associate User with profile
  User.associate = function (models) {

    //When user is deleted, also delete any associate profiles 
    User.hasMany(models.Profile, {
      onDelete: "cascade"
    });
  };
  return User;
};

