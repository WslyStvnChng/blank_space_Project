// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require('express');
var app = express.Router();

// Routes
// =============================================================

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route
  app.get("/", function(req, res) {
    res.render("index", {title: Express});
  });

  // contact route
  app.get("/contact", function(req, res) {
    res.render("index", {title: Express});
  });

  // about route
  app.get("/about", function(req, res) {
    res.render("about", {title: Express});
  });

  // categories route
  app.get("/categories", function(req, res) {
    res.render("categories", {title: Express});
  });

  // contact route
  app.get("/contact", function(req, res) {
    res.render("index", {title: Express});
  });

module.exports = app;
