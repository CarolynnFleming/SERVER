const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env'});
const path = require('path');
const app =express();
const createCheckoutSession = require('./api//checkout')
const port = 5050;

app.use(express.json());
app.use(cors({ origin: true}));
app.use(express.static(path.resolve(__dirname,"./client/build")));
app.get('/', (req, res) => res.send('YO Peeps'));

app.post('/create-checkout-session', createCheckoutSession);
app.post('/canceled')
app.listen(port, () => console.log('server listening on port', port));