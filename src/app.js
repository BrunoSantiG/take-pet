const express = require("express");
const cors = require("cors");



function AppController() {
	this.middlewares = () => {
		this.app.use(express.json());
	};


	this.routes = () => {
		
		this.app.use(cors());
		this.app.use(
			require("./routes.js"),
		);
	};

	this.app = express();
	this.middlewares();
	this.routes();
}

module.exports = new AppController().app;