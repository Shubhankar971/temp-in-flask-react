const express = require('express');
const bodyParser = require('body-parser');
const commentsRouter = require('./routes/comments');


const app = express();
app.use(bodyParser.json());


app.use('/tasks/:taskId/comments', (req, res, next) => {
// attach taskId to req so the router can access it uniformly
req.taskId = req.params.taskId;
next();
}, commentsRouter);


// Basic error handler
app.use((err, req, res, next) => {
console.error(err);
res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});


module.exports = app;