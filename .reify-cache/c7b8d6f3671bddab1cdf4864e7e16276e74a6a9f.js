"use strict";var NotImplementedException;module.link("../utils/NotImplementedException.js",{default(v){NotImplementedException=v}},0);

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

module.exportDefault(IWrite);