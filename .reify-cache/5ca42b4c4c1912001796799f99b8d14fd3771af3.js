"use strict";var ExameService;module.link('../exames.service.js',{default(v){ExameService=v}},0);var ExamesRepositoryFactory;module.link('../../repository/factories/exameFactory.js',{default(v){ExamesRepositoryFactory=v}},1);var LabsRepositoryFactory;module.link('../../repository/factories/LabsFactory.js',{default(v){LabsRepositoryFactory=v}},2);


class ExameServiceFactory {
  static createInstance() {
    const labsRepository = LabsRepositoryFactory.createInstance();
    const examesRepository = ExamesRepositoryFactory.createInstance();

    return new ExameService({examesRepository, labsRepository});
  }
}

module.exportDefault(ExameServiceFactory);