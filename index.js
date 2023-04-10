const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env'});

const app =express();

const port = 5050;

app.use(express.json());
app.use(cors({ origin: true}));
app.get('/', (req, res) => res.send('YO Peeps'));
app.listen(port, () => console.log('server listening on port', port));