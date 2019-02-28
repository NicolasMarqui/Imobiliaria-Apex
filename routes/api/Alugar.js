const express = require('express');
const route = express.Router();

const casasParaAlugar = require('../../models/AlugarCasa');

route.post('/addalugar', (req, res) => {
    
    const novaCasa = new casasParaAlugar({
        type: req.body.type.toLowerCase(),
        endereco: req.body.endereco.toLowerCase(),
        numeroDaCasa: req.body.numeroDaCasa,
        valorDoAluguel: req.body.valorDoAluguel,
        descricao: req.body.descricao,
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

route.get('/tipos/:tipo', (req, res) => {
    casasParaAlugar
        .find({tipo: req.params.tipo})
        .then(casas => res.json(casas))
        .catch(err => console.log(err));
})

route.get('/sort', (req, res) =>{
    if(req.query.sort === 'maior'){
        casasParaAlugar.find({tipo: 'alugar'}).sort({valorDoAluguel: 1}), (err, list) => {
            if (err) throw err;
    
            console.log(list)
            res.json(list)
    
            
        }
    }else if(req.query.sort === 'menor'){
        casasParaAlugar.find({}).sort({valorDoAluguel: -1}), (err, list) => {
            if (err) throw err;
    
            console.log(list)
            res.json(list)
    
            
        }
    }
})


route.get('/all', (req, res) => {
    casasParaAlugar.find({},(err, todas) => {
        if(err) throw new err;

        res.json(todas)
    })
})

route.get('/search/:name', (req, res) => {
    casasParaAlugar.find({ endereco: req.params.name , tipo: req.query.tipo}, (err, casas) => {
        if(err) throw new err;

        res.json(casas);
    })
})

route.get('/info/:id', (req, res) => {
    casasParaAlugar.find({ _id: req.params.id } , (err, casa) => {
        if(err) throw new err;

        res.json(casa);

    })
})

module.exports = route;
