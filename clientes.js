const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let nome = req.body.nome;
    let cpf = req.body.cpf;
    let email = req.body.email;
    let endereco = req.body.endereco;
    let data_nascimento = req.body.data_nascimento;
    let data_cadastro = req.body.data_cadastro;

    let query = 'INSERT INTO clientes (cliente_id, nome, cpf, email, endereco, data_nascimento, data_cadastro) VALUES'
    query += `('${cliente_id}', '${nome}', '${cpf}', '${email}', '${endereco}', '${data_nascimento}', '${data_cadastro}')`
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result)
        };
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result)
        };
    });
};

const update = (req, res) => {
    clientes.update(req.body, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente atualizado com sucesso', result });

        };
    });
};

const deletar = (req, res) => {
    const { cliente_id } = req.params;
    clientes.deletecliente(cliente_id, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Cliente removido com sucesso', result });
        };
    });
};




module.exports = {
    create,
    read,
    update,
    deletar
};