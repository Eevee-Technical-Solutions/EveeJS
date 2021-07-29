const express = require('express');
const app = express();
const path = require('path');
const mode = process.env.NODE_ENV;
var router = express.Router()
//Importing Passport Modules
const passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GitHubStrategy({
  clientID: "601f5bf1853f34406920",
  clientSecret: "257ac62d616e151dbe2251febf755ddf7e06d411",
  callbackURL: "http://localhost:3000/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
 console.log(profile)
 return cb(null, profile)
}
));

//auth user
// app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github',
  passport.authenticate('github'),
  function(req, res){
    console.log(req, res)
    res.redirect('/');
  });

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

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
