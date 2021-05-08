import BaseRepository from "./base.repository";

class ExameRepository extends BaseRepository{
  
  async find(query) {
    return this.dbConnection.find(query)
  }
}