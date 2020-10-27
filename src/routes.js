const express = require("express");
const Controller = require("./controller/produtos");

const routes = express.Router();

routes.get('/produtos', Controller.getProdutos);

module.exports = routes;