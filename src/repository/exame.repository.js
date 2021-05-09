import BaseRepository from "./base.repository.js";

class ExameRepository extends BaseRepository{
  
  async findActive(query) {
    return this.dbConnection.find(query)
  }
}

export default ExameRepository;