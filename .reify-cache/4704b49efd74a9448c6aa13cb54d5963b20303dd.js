"use strict";var BaseRepository;module.link("./base.repository.js",{default(v){BaseRepository=v}},0);

class ExameRepository extends BaseRepository{
  
  async findActive(query) {
    return this.dbSchema.find(query)
  }
  
  async searchByName(nome) {
    return this.dbSchema.find(
      {
        $and: [
          {$text: {$search: nome}},
          {status: 'ativo'}
        ]
      }
      )
      .populate('labsAssociados')
      .exec();
  }
}

module.exportDefault(ExameRepository);