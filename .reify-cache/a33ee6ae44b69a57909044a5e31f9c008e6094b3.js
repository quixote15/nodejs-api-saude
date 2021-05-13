"use strict";var LabRepositoryFactory;module.link('../repository/factories/LabsFactory.js',{default(v){LabRepositoryFactory=v}},0);var ExamesRepositoryFactory;module.link('../repository/factories/exameFactory.js',{default(v){ExamesRepositoryFactory=v}},1);var SchemaValidator;module.link('../utils/validator.js',{default(v){SchemaValidator=v}},2);var ApiError;module.link('../utils/ApiError.js',{default(v){ApiError=v}},3);




const repository = LabRepositoryFactory.createInstance();
const examRepository = ExamesRepositoryFactory.createInstance();
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

async function findLabsByExamName(req, res) {
  const {nome} = req.query;
  const result = await examRepository.searchByName(nome)
  res.send(result);
}

module.exportDefault({
  create,
  find,
  update,
  remove,
  findLabsByExamName
});