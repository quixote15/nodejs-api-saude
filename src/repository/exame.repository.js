import BaseRepository from "./base.repository.js";

class ExameRepository extends BaseRepository{
  
  async find(query) {
    return this.dbConnection.find(query)
  }
}

export default ExameRepository;