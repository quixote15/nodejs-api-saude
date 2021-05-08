import Lab from "../../models/schemas/lab.js";
import LabRepository from "../lab.repository.js";

class LabsFactory {
  static createInstance() {
    return new LabRepository({dbSchema: Lab, collectionName: 'laboratório'})
  }
}

export default LabsFactory;