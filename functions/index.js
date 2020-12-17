const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// - App config
const app = express();

app.use('/uploads', express.static('uploads'));

mongoose.connect("mongodb+srv://NaguiHW:7d9mxH2xyonP02EB@cluster0.ptoce.mongodb.net/images?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
  console.log('DB Connection error ' + err.message)
})

// - Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// - Import Category Route
app.use('/api', require('./routes/category.route.js'));

// - Page not found 404
app.use((req, res) => {
  res.status(404).json({
    errors: "page not found"
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
