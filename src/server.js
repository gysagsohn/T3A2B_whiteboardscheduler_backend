const express = require('express');
const cors = require('cors');
const app = express();
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

// Allows POST requests to have JSON body content
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
    optionsSuccessStatus: 200,
}));

// Routes
const userRouter = require('./controllers/userRouter');
app.use('/users', userRouter);

const assetRouter = require('./controllers/assetRouter');
app.use('/assets', assetRouter);

const clientRouter = require('./controllers/clientRouter');
app.use('/clients', clientRouter);

const operatorRouter = require('./controllers/operatorRouter');
app.use('/operators', operatorRouter);

const allocationRouter = require('./controllers/allocationRouter');
app.use('/allocations', allocationRouter);

// Handle 404 and errors
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;  // Ensure you are exporting the app correctly
