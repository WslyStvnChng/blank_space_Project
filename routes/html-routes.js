// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // each of the below routes just handles the HTML page that the user gets sent to.

  // index route
  app.get("/", function(req, res) {
    res.render("index", {title: express});
  });

  // contact route
  app.get("/contact", function(req, res) {
    res.render("contact", {title: express});
  });

  // about route
  app.get("/about", function(req, res) {
    res.render("about", {title: express});
  });

  // categories route
  app.get("/categories", function(req, res) {
    res.render("categories", {title: express});
  });

  // categories route
  app.get("/upload", function(req, res) {
    res.render("upload", {title: express});

  });

  app.get("/index", function(req, res) {
    db.Post.findAll()
      .then(function(retImages){
              return res.render("index", { images : retImages });
      });
  }); 
  //we need to get images out of database. eash has to have specific id
  //render depending on what it returns us

 app.get("/images/:id", function(req,res) {
   db.Post.findOne({ where: {
    id: req.params.id
   } }).then(
     function(data) {
       res.render('image', { link: data.link,
        id: data.id
      });
     }
   )
 })
};
