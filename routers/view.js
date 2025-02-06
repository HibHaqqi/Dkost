const express = require("express");
const pages = express.Router();

pages.get("/", (req, res) => {
    res.render("login");
  });

  module.exports = pages;