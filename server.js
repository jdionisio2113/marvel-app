const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

const users = require('./routes/api/users');

// Bodyparser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
	.connect(db, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	})
	.then(() => console.log('MongoDB successfully connected'))
	.catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);
// Routes
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server up and running!`));
