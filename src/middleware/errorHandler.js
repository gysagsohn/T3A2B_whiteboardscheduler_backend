// Middleware function to handle server errors
function errorHandler(err, req, res, next) {
    console.error(err.stack);
     // Send a 500 Internal Server Error response with a JSON message
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
}

// Middleware function to handle routes that are not found (404 errors)
function notFoundHandler(req, res, next) {
    // Send a 404 Not Found response with a JSON message
    res.status(404).json({ message: 'Route Not Found' });
}

// Export the error handling functions for use in other parts of the application
module.exports = {
    errorHandler,
    notFoundHandler
};