const express = require("express");
const app = express();
const cors = require("cors");


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

module.exports = {
	app // Exporting the app instance for use in other files
}