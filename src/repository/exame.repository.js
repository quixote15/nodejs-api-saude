import BaseRepository from "./base.repository.js";

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

export default ExameRepository;