import ExamesRepositoryFactory from '../repository/factories/exameFactory.js';
import SchemaValidator from '../utils/validator.js'
import ExamesService from '../services/factory/exameService.factory.js'
import ApiError from '../utils/ApiError.js';
const repository = ExamesRepositoryFactory.createInstance();
const validator = new SchemaValidator();
const service = ExamesService.createInstance();

async function find(req, res) {
  try {
    const result = await repository.find({});
    res.send(result);
  } catch (error) {
    res.status(500).send(ApiError.getInternalServerError());
  }
}

async function create(req, res) {
  const {nome, tipo} = req.body;
  const exame = {
    nome,
    tipo,
    status: 'ativo'
  }
  try {
    const errors = validator.validate(exame);
    if(errors.length > 0) {
      const [currentError] = errors;
      return res.status(422).send(ApiError.getValidationError(currentError.message));
    }

    await repository.create(exame);

    res.send('Exame criado.')
  } catch (error) {
    res.status(500).send(ApiError.getInternalServerError());
  }
}

async function update(req, res) {
  try {
    const examId = req.params.id;
    await repository.update({_id: examId}, req.body);
    res.send('Exame atualizado.')
  } catch (error) {
    res.status(500).send(ApiError.getInternalServerError());
  }
}

async function remove(req, res) {
  try {
      const examId = req.params.id;
      await repository.remove({_id: examId});
      res.send('Exame removido.')
    } catch (error) {

      res.status(500).send(ApiError.getInternalServerError());
    }
}


async function associarLab(req, res) {
  try {
    const { exame_id, lab_id} = req.body;
    const result = await service.associar({exame_id, lab_id});

    res.send(result);
  } catch (error) {
    if(error.name === 'ValidationError') {
      return res.status(422).send(ApiError.getValidationError(error.message))
    }
    res.status(500).send(ApiError.getInternalServerError());
  }
}

async function desassociarLab(req, res) {
  try {
    const result = await service.desassociar(req.body);
    res.send(result);
  } catch (error) {
    if(error.name === 'ValidationError') {
      return res.status(422).send(ApiError.getValidationError(error.message))
    }
    res.status(500).send(ApiError.getInternalServerError());
  }
}


async function findLabsByExamName(req, res) {
  const {nome} = req.query;
  const result = await repository.searchByName(nome)
  res.send(result);
}

export default {
  create,
  find,
  update,
  remove,
  associarLab,
  desassociarLab,
  findLabsByExamName
}