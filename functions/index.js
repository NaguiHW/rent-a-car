const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { db } = require('./firebase');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Hello World!',
  })
});

app.post('/uploadInfo', async (req, res) => {
  const { model, carType, price, year, speed, seats, doors, transmission, quantity, imagesLink } = req.body;
  console.log(req.body);
  const sendInfo = await db
    .collection('cars')
    .add({
      model,
      carType,
      price,
      year,
      speed,
      seats,
      doors,
      transmission,
      quantity,
      imagesLink,
    })
  console.log(sendInfo.id);
  return res.status(201).json({
    message: 'Uploaded',
  })
})

app.get('/all', async (req, res) => {
  try {
    const cars = await db
      .collection('cars')
      .onSnapshot(snapshot => {
        console.log(typeof snapshot);
        return res.status(201).send(snapshot.docs);
      })
      console.log('try')
  } catch (err) {
    return res.status(401).json({
      error: err,
    })
  }
})

// Listen Command
exports.api = functions.https.onRequest(app);
