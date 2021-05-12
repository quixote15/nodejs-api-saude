"use strict";var NotImplementedException;module.link("../utils/NotImplementedException.js",{default(v){NotImplementedException=v}},0);

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

module.exportDefault(IWrite);