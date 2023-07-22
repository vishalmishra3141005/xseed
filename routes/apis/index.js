

const apiController = require("../../controller/apis");


const express = require("express");

const route = express.Router();

route.post("/login", apiController.loginController);

module.exports = route;

