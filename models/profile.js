module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile",{
    profile_id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_name: {
      type: DataTypes.STRING,
      // defaultValue: "",
      defaultValue: "picture",
      validate: {
        isUrl: true
      }
    }
  });
  
  Profile.associate = function(models) {
    //One profile should belong to an User, a profile can't be created without an User due to the foreign key constraint
    Profile.belingsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
    return Profile;
  }

