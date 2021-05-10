import ExameService from '../exames.service.js';
import ExamesRepositoryFactory from '../../repository/factories/exameFactory.js';
import LabsRepositoryFactory from '../../repository/factories/LabsFactory.js';
class ExameServiceFactory {
  static createInstance() {
    const labsRepository = LabsRepositoryFactory.createInstance();
    const examesRepository = ExamesRepositoryFactory.createInstance();

    return new ExameService({examesRepository, labsRepository});
  }
}

export default ExameServiceFactory;