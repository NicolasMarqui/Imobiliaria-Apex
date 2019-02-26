const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

const db = require('./config/keys').MONGO_URI;
const Alugar = require('./routes/api/Alugar');

app.use(bodyParser.json());
app.use('/api/casas/', Alugar);

mongoose.connect(db, {useNewUrlParser: true})
    .then(console.log('Banco de dados conectado'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port , console.log(`Server rodando na porta ${port}`))

