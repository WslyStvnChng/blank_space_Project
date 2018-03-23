module.exports = function(sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1]
      // }
    },
<<<<<<< HEAD
    body: {
      type: DataTypes.STRING,
=======
    comment: {
      type: DataTypes.TEXT,
>>>>>>> 2e9f3d2d6c16e93b414994cba0d3f02fc89fc51c
      allowNull: false,
      len: [1]
    },
    nsfw: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

<<<<<<< HEAD
=======
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
>>>>>>> 2e9f3d2d6c16e93b414994cba0d3f02fc89fc51c
  return Post;
};
