import LabRepositoryFactory from '../repository/factories/LabsFactory.js';
import SchemaValidator from '../utils/validator.js'
import ApiError from '../utils/ApiError.js';

const repository = LabRepositoryFactory.createInstance();
const validator = new SchemaValidator();

async function find(req, res) {
  try {
    const result = await repository.find({});
    res.send(result);
  } catch (error) {
    res.status(500).send(ApiError.getInternalServerError());
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
    const errors = validator.validate(lab);
    
    if(errors.length > 0) {
      const [currentError] = errors;
      return res.status(422).send(ApiError.getValidationError(currentError.message));
    }

    await repository.create(lab);

    res.send('Laboratorio criado.')
  } catch (error) {
    res.status(500).send(ApiError.getInternalServerError());
  }
}

async function update(req, res) {
  try {
    const labId = req.params.id;
    await repository.update({_id: labId}, req.body);
    res.send('Laboratorio atualizado.')
  } catch (error) {
    res.status(500).send(ApiError.getInternalServerError());
  }
}

async function remove(req, res) {
  try {
      const labId = req.params.id;
      await repository.remove({_id: labId});
      res.send('Laboratorio removido.')
    } catch (error) {
      res.status(500).send(ApiError.getInternalServerError());
  }
}

export default {
  create,
  find,
  update,
  remove
}