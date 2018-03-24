module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("Tag", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });

  Tag.associate = function(models) {
    Tag.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Tag;
  console.log(Tag)
};
