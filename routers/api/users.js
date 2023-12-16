const express = require("express");
const LoginRegisController = require("../../controller/loginregis.controller");

const users = express.Router();

const loginRegisController = new LoginRegisController();

users.post('/v1/regis',loginRegisController.regisCustomer);
users.post('/v1/login',loginRegisController.loginCheck)

module.exports = users;