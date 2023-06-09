const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env'});
const path = require('path');
const app =express();
const createCheckoutSession = require('./api/checkout')
const port = 5050;

app.use(express.json());
app.use(cors({ origin: ['https://jovial-choux-3e4c2c.netlify.app'],
credentials: true }));
app.use(express.static(path.resolve(__dirname,"./client/build")));
app.get('/', (req, res) => res.send('YO Peeps'));

app.post('/create-checkout-session', createCheckoutSession);

app.listen(port, () => console.log('server listening on port', port));