const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(cors());
const db = require('./config/keys').MONGO_URI;
const Alugar = require('./routes/api/Alugar');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(bodyParser.json());
app.use('/api/casas/', Alugar);

mongoose.connect(db, {useNewUrlParser: true})
    .then(console.log('Banco de dados conectado'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port , console.log(`Server rodando na porta ${port}`))

