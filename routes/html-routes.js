// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");

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

 //  app.get("/index", function(req, imageURL) {
 //  imgURL.selectAll(function(data) {
 //  res.render("index", { blank_space_data: data });
 //  });
 // });

};
