
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const windRouter = require('./routes/wind.router');
const weatherRouter = require('./routes/weather.router');
const lakeRouter = require('./routes/lake.router');
const userDataRouter = require('./routes/userData.router');
const historyRouter = require('./routes/history.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/wind',windRouter);
app.use('/api/weather',weatherRouter);
app.use('/api/lake',lakeRouter);
app.use('/api/userData',userDataRouter);
app.use('/api/history',historyRouter);





// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
