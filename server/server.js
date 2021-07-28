const express = require('express');
const app = express();
const path = require('path');
const mode = process.env.NODE_ENV;

// require routers
const auctionRouter = require('./routes/auctionRouter');

// handling parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define route handlers
app.use('/api', auctionRouter);

// route handler to respond with main app
app.get('/', (req, res) => {
  // console.log(response);
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  return res.sendStatus(404);
});

// default error handler
app.use((error, request, response, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, error);
  console.log(errorObj.log);
  return response.status(errorObj.status).send(errorObj.message);
});

// statically serve everything in the build folder on the route '/build'
if (mode === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(3000, () => console.log('express is listening')); 
