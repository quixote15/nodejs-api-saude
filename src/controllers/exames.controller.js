import ExamesRepositoryFactory from '../repository/factories/exameFactory.js';
import SchemaValidator from '../utils/validator.js'

const repository = ExamesRepositoryFactory.createInstance();
const validator = new SchemaValidator();

function find(req, res) {

}

async function create(req, res) {
  const {nome, tipo} = req.body;
  const exame = {
    nome,
    tipo,
    status: 'ativo'
  }
  try {
    console.log('validator: ', validator);
    
    const errors = validator.validate(exame);
    
    if(errors.length > 0) {
      return res.status(403).send(errors);
    }

    await repository.create(exame);

    res.send('Exame criado.')
  } catch (error) {
    res.status(500).send({message: 'Erro interno.'});
  }
}

function update(req, res) {

}

function remove(req, res) {

}



export default {
  create
}