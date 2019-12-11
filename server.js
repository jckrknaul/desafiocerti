const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

//rotas
app.use('/', require('./routes'));

app.listen(PORT, HOST);