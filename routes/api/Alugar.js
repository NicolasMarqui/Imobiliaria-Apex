const express = require('express');
const route = express.Router();

const casasParaAlugar = require('../../models/AlugarCasa');

route.post('/addalugar', (req, res) => {
    
    const novaCasa = new casasParaAlugar({
        endereco: req.body.endereco,
        valorDoAluguel: req.body.valorDoAluguel,
        areaDoTerreno: req.body.areaDoTerreno,
        areaConstruida: req.body.areaConstruida,
        numeroDeQuartos:  req.body.numeroDeQuartos,
        numeroDeBanheiros: req.body.numeroDeBanheiros,
        vagasNaGaragem: req.body.vagasNaGaragem,
        prontaParaMudar: req.body.prontaParaMudar,
        imagensDaCasa: req.body.imagensDaCasa
    })

    novaCasa
        .save()
        .then(res => console.log(res))
        .catch(err => console.error(err));

})

route.get('/alugar', (req, res) => {
    casasParaAlugar
        .find({})
        .then(casas => res.send(casas))
        .catch(err => console.log(err));
})

module.exports = route;