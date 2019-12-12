const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

//rotas usadas
app.use('/', require('./routes'));

app.listen(process.env.PORT || PORT, process.env.HOST || HOST);