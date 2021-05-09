import LabRepositoryFactory from '../repository/factories/LabsFactory.js';
import SchemaValidator from '../utils/validator.js'

const repository = LabRepositoryFactory.createInstance();
const validator = new SchemaValidator();

async function find(req, res) {
   try {
    const result = await repository.find({});
    res.send(result);
  } catch (error) {
    res.status(403).send(error);
  }
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
   try {
    const labId = req.params.id;
    await repository.update({_id: labId}, req.body);
    res.send('Laboratorio atualizado.')
  } catch (error) {
    res.status(500).send(error);
  }
}

async function remove(req, res) {
   try {
      const labId = req.params.id;
      await repository.remove({_id: labId});
      res.send('Laboratorio removido.')
    } catch (error) {
      res.status(500).send(error);
    }
}

export default {
  create,
  find,
  update,
  remove
}