module.exports = function(sequelize, DataTypes) {

  var Post = sequelize.define("Post", {
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
  return Post;
};
