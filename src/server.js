const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler.js");
const cookieParser = require('cookie-parser');


// Using Parsing Cookies
app.use(cookieParser());
// Allows POST requests to have JSON body content
app.use(express.json());


app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin once it is live
    credentials: true, // Allow credentials (cookies) to be sent
}));

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

const allocationRouter = require("./controllers/allocationRouter.js")
app.use("/allocations", allocationRouter);

// Handle 404 Not Found
app.use(notFoundHandler);

// Handle errors
app.use(errorHandler);

module.exports = {
	app // Exporting the app instance for use in other files
}