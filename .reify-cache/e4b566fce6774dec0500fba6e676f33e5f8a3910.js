"use strict";var ExameService;module.link('../../src/services/exames.service.js',{default(v){ExameService=v}},0);var ExamesRepositoryFactory;module.link('../../src/repository/factories/exameFactory.js',{default(v){ExamesRepositoryFactory=v}},1);var LabsRepositoryFactory;module.link('../../src/repository/factories/LabsFactory.js',{default(v){LabsRepositoryFactory=v}},2);var sinon;module.link('sinon',{default(v){sinon=v}},3);var describe,it,before,beforeEach;module.link('mocha',{describe(v){describe=v},it(v){it=v},before(v){before=v},beforeEach(v){beforeEach=v}},4);var Assert;module.link('assert',{default(v){Assert=v}},5);var ValidationError;module.link('../../src/utils/ValidationError.js',{default(v){ValidationError=v}},6);





const { rejects, deepStrictEqual } = Assert;



const mocks = {
  validExame: {
    id: '1',
    nome: 'Teste',
    tipo: 'imagem',
    status: 'ativo',
    labsAssociados: [],
  },
  validLab: {
    id: '2',
    nome: 'Lab nova esperanca',
    endereco: 'Av. jardim hebrom, 333 - SP',
    status: 'ativo'
  }
}

describe('ExamesService Test Suite', () => {
  let sandbox = {};
  const examesRepository = ExamesRepositoryFactory.createInstance();
  const labsRepository = LabsRepositoryFactory.createInstance();
  const exameService = new ExameService({examesRepository, labsRepository});

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore()
    sandbox = sinon.restore()
  })

  it('should not associate an exame with inactive lab', async() => {
    const invalidLab = Object.create(mocks.validLab);
    invalidLab.status = 'inativo';
    const associacao = {
      exame_id: mocks.validExame.id,
      lab_id: invalidLab.id
    }

    sandbox.stub(labsRepository, labsRepository.findOne.name).resolves(invalidLab);
    sandbox.stub(examesRepository, examesRepository.findOne.name).resolves(mocks.validExame);

    const result = exameService.associar(associacao);
    const rejection = new ValidationError('Laboratório está desativado.')
    await rejects(result, rejection)
  });

  it('should not associate an exame with lab twice', async() => {
    const validLab = Object.create(mocks.validLab);
    const exameAssociado = {
      ...mocks.validExame,
      labsAssociados: [validLab.id]
    }

    const associacao = {
      exame_id: exameAssociado.id,
      lab_id: validLab.id
    }

    sandbox.stub(labsRepository, labsRepository.findOne.name).resolves(validLab);
    sandbox.stub(examesRepository, examesRepository.findOne.name).resolves(exameAssociado);

    const result = exameService.associar(associacao);
    const rejection = new ValidationError('Exame já está associado com esse laboratório.')
    await rejects(result, rejection)
  })

  it('should associate an exame with a active lab', async () => {

    const associacao = {
      exame_id: mocks.validExame.id,
      lab_id: mocks.validLab.id
    }

    sandbox.stub(labsRepository, labsRepository.findOne.name).resolves(mocks.validLab);
    sandbox.stub(examesRepository, examesRepository.findOne.name).resolves(mocks.validExame);
    sandbox.stub(examesRepository, examesRepository.update.name).resolves(mocks.validExame);

    const result = await exameService.associar(associacao);
    deepStrictEqual(result, 'Exame associado.')
  })
});