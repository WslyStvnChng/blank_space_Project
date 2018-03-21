module.exports = function(sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1]
      // }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  return Post;
};
