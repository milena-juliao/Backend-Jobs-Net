const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res){
        const {email, gender, name, nasc, cpf, cep, logradouro, numero, cidade, profissao, celular, estCivil, cargoPretend} = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.gender = gender;
        newCandidate.name = name;
        newCandidate.nasc = nasc;
        newCandidate.cpf = cpf;
        newCandidate.cep = cep;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.cidade = cidade;
        newCandidate.profissao = profissao;
        newCandidate.celular = celular;
        newCandidate.estCivil = estCivil;
        newCandidate.cargoPretend = cargoPretend;

        newCandidate.save((err, savedCandidate) => {
            if(err){
                console.log(err);
                return res.status(500).send('Temos um problema aqui meu amigo!');
            }
            return res.status(200).send(savedCandidate);
        });

    },
}