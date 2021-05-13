import NotImplementedException from "../utils/NotImplementedException.js";

class IWrite {
  async create(model) {
    throw new NotImplementedException(this.create.name);
  }

  async update(model) {
    throw new NotImplementedException(this.update.name)
  }

  async remove(){
    throw new NotImplementedException(this.remove.name);
  }
}

export default IWrite;