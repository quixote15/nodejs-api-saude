import LabRepositoryFactory from '../repository/factories/LabsFactory.js';
import SchemaValidator from '../utils/validator.js'

const repository = LabRepositoryFactory.createInstance();
const validator = new SchemaValidator();

async function find(req, res) {
  
}

async function create(req, res) {
  const {nome, endereco} = req.body;
  const lab = {
    nome,
    endereco,
    status: 'ativo'
  }
  try {
    console.log('validator: ', validator);
    
    const errors = validator.validate(lab);
    
    if(errors.length > 0) {
      return res.status(403).send(errors);
    }

    await repository.create(lab);

    res.send('Laboratorio criado.')
  } catch (error) {
    res.status(500).send({message: 'Erro interno.'});
  }
}

async function update(req, res) {

}

async function remove(req, res) {
  
}

export default {
  create,
  find,
  update,
  remove
}