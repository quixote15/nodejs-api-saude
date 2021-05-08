import Exame from "../../models/schemas/exame.js";
import ExameRepository from "../exame.repository.js";

class ExameFactory {
  static createInstance() {
    return new ExameRepository({dbSchema: Exame, collectionName: 'exame'})
  }
}

export default ExameFactory;