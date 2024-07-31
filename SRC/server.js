const express = require("express");
const app = express();


// Allows POST requests to have JSON body content
app.use(express.json());

app.get("/", (request, response, next) => {

	response.json({
		message: "Testing to make sure it works!"
	});
});

module.exports = {
	app // Exporting the app instance for use in other files
}