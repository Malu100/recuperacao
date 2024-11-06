const con = require('../connect/connect').con;

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let marca_veiculo = req.body.marca_veiculo;
    let  modelo_veiculo = req.body. modelo_veiculo;
    let ano_veiculo = req.body.ano_veiculo;
    let fabricacao_veiuclo = req.body.fabricacao_veiuclo;
    let carros_id = req.body.carros_id;

    let query = 'INSERT INTO carros (cliente_id, marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiuclo, carros_id) VALUES'
    query += `('${cliente_id}', '${marca_veiculo}', '${modelo_veiculo}', '${ano_veiculo}', '${fabricacao_veiuclo}', '${carros_id}')`;
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(result)
        }
    });
};


const read = (req, res) => {
    con.query('SELECT * FROM carros', (err, result) => {
        if (err) {
            res.status(500).json(err);
        } else {
           res.json(result)
        }
    });
};

const update = (req, res) => {
  Carros.update(req.body, (err, result) =>{
       if (err) {
           res.status(500).json({error:err.message});
        } else {
           res.json({message:'Carro atualizado com sucesso', result});
        }
    });
};

const deletar = (req, res) => {
   const {carro_id} = req.params;
    carros.deletecarro(carro_id, (err, result) => {
        if (err) {
            res.status(500).json({error: err.message});
        } else {
        res.json ({ message: 'Carro removido com sucesso', result});
        }
    });
};


module.exports = {
    create,
    read,
    update,
    deletar
};