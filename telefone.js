//const { create } = require('./carros');

const con = require('../connect/connect').con;

const create = (req, res) => {
    let telefone_id = req.body.telefone_id;
    let cliente_id = req.body.cliente_id;
    let numero = req.body.numero;
    let tipo = req.body.tipo;

    let query = 'INSERT INTO telefone (telefone_id, cliente_id, numero,  tipo) VALUES'
    query += `('${telefone_id}', '${cliente_id}', '${numero}', '${tipo}',);`;
    con.query(query, (err, result) => {
        if (err) {  
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    });
};

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    });
};


const update = (req, res) => {
    let id = req.params.id; 
    let numero = req.body.numero; 
    let tipo = req.body.tipo;
    let cliente_id = req.body.cliente_id; 

    let query = ` UPDATE telefone
        SET numero = '${numero}', tipo = '${tipo}', cliente_id = ${cliente_id}
        WHERE telefone_id = '${id}' `;
    
    con.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            if (result.affectedRows > 0) {
                res.status(202).json(req.body).end();
            } else {
                res.status(404).json("Telefone não encontrado").end();
            }
        }
    });
};


const deletar = (req, res) => {
    let id = req.params.id; // ID do telefone a ser excluído
    
    con.query(` DELETE FROM telefone WHERE telefone_id = '${id}'`, (err, result) => {
        if (err) {
            res.status(400).json(err).end();
        } else {
            if (result.affectedRows > 0) {
                res.status(204).json(result).end();
            } else {
                res.status(404).json("Telefone não encontrado").end();
            }
        }
    });
};

module.exports = {
    create,
    read,
    update,
    deletar
};

