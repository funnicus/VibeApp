require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

const testRouter = require('./routes/test');
const vibeRouter = require('./routes/vibe');

const mongoose = require('mongoose');

const mongoUrl = process.env.MONGODB_URI;

console.log('connecting to mongodb...');

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

const reactApp = express.static('./build');
app.use(reactApp);

app.use('/api/test', testRouter);
app.use('/api/vibes', vibeRouter);

app.use('*', reactApp);

module.exports = app;

