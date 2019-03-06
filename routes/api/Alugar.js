const express = require('express');
const route = express.Router();

const casasParaAlugar = require('../../models/AlugarCasa');

route.post('/addalugar', (req, res) => {
    
    const novaCasa = new casasParaAlugar({
        tipo: req.body.tipo.toLowerCase(), 
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
    casasParaAlugar.find({tipo: req.params.tipo})
        .then(casa => res.json(casa))
})

route.get('/venda/:tipo', (req, res) => {
    casasParaAlugar.find({tipo: req.params.tipo})
        .then(casa => res.json(casa))
})

route.get('/alugar/sortprice', (req, res) =>{
    if(req.query.sort === 'menor'){
       casasParaAlugar.find({tipo: 'alugar'}).sort({ valorDoAluguel: 1 }).exec((err, list) => {
           if (err) throw err;

           res.json(list)
       })
    }else{
        casasParaAlugar.find({tipo: 'alugar'}).sort({ valorDoAluguel: -1 }).exec((err, list) => {
            if (err) throw err;
 
            res.json(list)
        })
    }
})
 
route.get('/venda/sortprice', (req, res) =>{
    if(req.query.sort === 'menor'){
       casasParaAlugar.find({tipo: 'venda'}).sort({ valorDoAluguel: 1 }).exec((err, list) => {
           if (err) throw err;

           res.json(list)
       })
    }else{
        casasParaAlugar.find({tipo: 'venda'}).sort({ valorDoAluguel: -1 }).exec((err, list) => {
            if (err) throw err;
 
            res.json(list)
        })
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


route.get('/alugar/filtroPreco', (req, res) => {

    if(req.query.max === undefined){
        casasParaAlugar.find({tipo : 'alugar', valorDoAluguel:{$gte: req.query.min}}).exec((err, sort) => {
            if (err) throw err;
    
            res.json(sort)
        })
    }else{
        casasParaAlugar.find({tipo : 'alugar', valorDoAluguel:{$gte: req.query.min, $lte: req.query.max}}).exec((err, sort) => {
            if (err) throw err;
    
            res.json(sort)
        })
    }
})

route.get('/alugar/filtroQuarto', (req, res) => {

    console.log(req.query)

    if(req.query.quantidade === 5){
        casasParaAlugar.find({ tipo: 'alugar' , valorDoAluguel: {$gte: req.query.quantidade}}).exec((err, list) => {
            if (err) throw err;
    
            res.json(list)
        })
    }else{
        casasParaAlugar.find({ tipo: 'alugar' }).where('numeroDeQuartos').equals(req.query.quantidade).exec((err, list) => {
            if (err) throw err;
    
            res.json(list)
        })
    }
})

route.get('/casas', (req, res) => {
    if(parseInt(req.query.banheiros) === 5){
        console.log('funfa')
        casasParaAlugar.find({ tipo: req.query.tipo })
        .where('numeroDeQuartos').equals(req.query.quartos)
        .where('numeroDeBanheiros').gt(req.query.banheiros)
        .where('valorDoAluguel').equals(req.query.valor)
        .where('vagasNaGaragem').equals(req.query.vagas).exec((err, results) => {
            if(err) throw err;

            res.json(results)
        }) 
    }else{
        casasParaAlugar.find({ tipo: req.query.tipo })
        .where('numeroDeQuartos').equals(req.query.quartos)
        .where('numeroDeBanheiros').equals(req.query.banheiros)
        .where('valorDoAluguel').equals(req.query.valor)
        .where('vagasNaGaragem').equals(req.query.vagas).exec((err, results) => {
            if(err) throw err;

            res.json(results)
        }) 
    }
})

route.get('/enderecos', (req, res) => {
    casasParaAlugar.find({}).select('endeCompleto').exec((err, result) => {
        if (err) throw err;

        console.log(result)
        res.json(result)
    })
})

module.exports = route;
