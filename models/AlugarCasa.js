const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const casasParaAlugar = new Schema({
    endereco:{
        type: String,
        required: true,
    },
    numeroDaCasa:{
        type: Number,
        required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: false,
    },
    valorDoAluguel:{
        type: Number,
        required: true,
    },
    areaDoTerreno:{
        type: Number,
        required: true,
    },
    areaConstruida:{
        type: Number,
        required: true,
    },
    numeroDeQuartos:{
        type: Number,
        required: true,
    },
    numeroDeBanheiros:{
        type: Number,
        required: true,
    },
    vagasNaGaragem:{
        type: Number,
        required: true,
    },
    prontaParaMudar:{
        type: Boolean,
        required: true,
    },
    imagensDaCasa:{
        type:[String],
        required: false,
    },
    isApartamento: {
        type: Boolean,
        required: false,
    },
    data: {
        type: Date,
        default: Date.now
    }
})

module.exports = CasasAlugar = mongoose.model('alugar', casasParaAlugar);