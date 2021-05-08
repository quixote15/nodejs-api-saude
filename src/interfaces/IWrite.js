import NotImplementedException from "../utils/NotImplementedException.js";

class IWrite {
  async create(model) {
    throw new NotImplementedException(this.create.name);
  }

  async update(model) {
    throw new NotImplementedException(this.update.name)
  }

  async delete(){
    throw new NotImplementedException(this.delete.name);
  }
}

export default IWrite;