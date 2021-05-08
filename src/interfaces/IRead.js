import NotImplementedException from "../utils/NotImplementedException.js";

class IRead {
  async find(query) {
    throw new NotImplementedException(this.find.name)
  }

}

export default IRead;