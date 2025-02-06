const express = require("express");
const pages = express.Router();

pages.get("/", (req, res) => {
    res.render("login");
  });
pages.get("/view", (req, res) => {
    res.render("view");
  });

  module.exports = pages;