const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { db } = require('./firebase');

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/demo', async (request, response) => {
  await db.collection('demo').add({
    name: 'John',
    lastname: 'Doe',
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
