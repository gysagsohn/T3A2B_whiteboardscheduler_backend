function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
}

function notFoundHandler(req, res, next) {
    res.status(404).json({ message: 'Route Not Found' });
}

module.exports = {
    errorHandler,
    notFoundHandler
};