import {ExamesController} from '../exames.controller.js';
import SchemaValidator from '../../utils/validator.js'
import ExameRepositoryFactory from '../../repository/factories/exameFactory.js'
class ExamesControllerFactory {
  static createInstance() {
    const repository = ExameRepositoryFactory.createInstance();
    const validator = new SchemaValidator();
    return new ExamesController({repository,validator});
  }
}

export default ExamesControllerFactory;