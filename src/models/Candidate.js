const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    
    email: {type: String, unique: true, required: true},
    gender: {type: String, unique: false, required: true},
    name: {type: String, unique: false, required: true},
    nasc: {type: String, unique: true, required: true},
    cpf: {type: String, unique: false, required: true},
    cep: {type: String, unique: false, required: true},
    logradouro: {type: String, unique: false, required: true},
    numero: {type: String, unique: false, required: true},
    cidade: {type: String, unique: false, required: true},
    profissao: {type: String, unique: false, required: true},
    celular: {type: String, unique: false, required: true},
    estCivil: {type: String, unique: false, required: true},
    cargoPretend: {type: String, unique: false, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);