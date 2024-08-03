const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");



// Allows POST requests to have JSON body content
app.use(express.json());

app.use(cors());

app.get("/", (request, response, next) => {

	response.json({
		message: "Testing to make sure it works!"
	});
});

const userRouter = require("./controllers/userRouter.js")
app.use("/users", userRouter);

const assetRouter = require("./controllers/assetRouter.js")
app.use("/assets", assetRouter);

const clientRouter = require("./controllers/clientRouter.js")
app.use("/clients", clientRouter);

const operatorRouter = require("./controllers/operatorRouter.js")
app.use("/operators", operatorRouter);

// Handle 404 Not Found
app.use(notFoundHandler);

// Handle errors
app.use(errorHandler);

module.exports = {
	app // Exporting the app instance for use in other files
}