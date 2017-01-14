const express = require('express');
const mongoose = require('mongoose')
const app = express();

const posts = require('./api/routes/posts');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/posts', posts);

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/reddit' );
const db = mongoose.connection;
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
