"use strict";var NotImplementedException;module.link("../utils/NotImplementedException.js",{default(v){NotImplementedException=v}},0);

class IRead {
  async find(query) {
    throw new NotImplementedException(this.find.name)
  }

}

module.exportDefault(IRead);