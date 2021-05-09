import IWrite from '../interfaces/IWrite.js'
import IRead from '../interfaces/IRead.js'

class BaseRepository extends IWrite{
  constructor({dbSchema, collectionName}) {
    super();
    this.dbSchema = dbSchema;
    this.collectionName = collectionName;
  }

  async find(query) {
    return this.dbSchema.find({status: 'ativo'});
  }
  
  async create(schemaData) {
    const newSchema = new this.dbSchema(schemaData);
    return newSchema.save();
  }

  async update({schemaId, data}) {
    return this.dbSchema.findOneAndUpdate(schemaId, data);
  }
  
  async remove(schemaId){
    return this.dbSchema.findOneAndUpdate(schemaId, {status: 'inativo'});
  }
}

export default BaseRepository