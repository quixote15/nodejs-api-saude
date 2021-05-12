"use strict";var BaseRepository;module.link("./base.repository.js",{default(v){BaseRepository=v}},0);

class ExameRepository extends BaseRepository{
  
  async findActive(query) {
    return this.dbConnection.find(query)
  }
}

module.exportDefault(ExameRepository);