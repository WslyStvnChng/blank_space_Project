var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the tags
  app.get("/api/tags", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    // Get route for finding all tags
    db.Tag.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbTag) {
      res.json(dbTag);
    });
  });

  // Get rotue for finding a single tag
  app.get("/api/tags/:id", function(req, res) {
    db.Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbTag) {
      res.json(dbTag);
    });
  });

// Possible handle bar route to add? Maybe not...
  // app.get("/???", function(req, res) {
  //   // express callback response by calling burger.selectAllBurger
  //   burger.all(function(blank_space_data) {
  //     // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  //     res.render("index", { blank_space_data: blank_space_data });
  //   });
  // });



  // POST route for saving a new tag
  app.post("/api/tags", function(req, res) {
    db.Tag.create(req.body).then(function(dbTag) {
      res.json(dbTag);
    });
  });

  // DELETE route for deleting tags
  app.delete("/api/tags/:id", function(req, res) {
    db.Tag.destroy({
      where: {
        id: req.params.id
      },
    }).then(function(dbTag) {
      res.json(dbTag);
    });
  });

  // PUT route for updating tags
  app.put("/api/tags", function(req, res) {
    db.Tag.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbTag) {
        res.json(dbTag);
      });
  });
};
