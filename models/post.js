module.exports = function(sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
         len: [1]
       }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    nsfw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },

    imgURL: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
         len: [1]
       }
    },

  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    Post.associate = function(models) {
      Post.hasMany(models.Tag, { onDelete: "cascade" });
    };
  return Post;
};
