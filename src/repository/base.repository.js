class BaseRepository {
  constructor({dbConnection}) {
    this.dbConnection = dbConnection;
  }
}

export default BaseRepository