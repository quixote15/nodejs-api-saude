"use strict";var IWrite;module.link('../interfaces/IWrite.js',{default(v){IWrite=v}},0);var IRead;module.link('../interfaces/IRead.js',{default(v){IRead=v}},1);


class BaseRepository extends IWrite{
  constructor({dbSchema, collectionName}) {
    super();
    this.dbSchema = dbSchema;
    this.collectionName = collectionName;
  }

  async find(query) {
    return this.dbSchema.find({status: 'ativo'});
  }
  async findOne(id) {
    return this.dbSchema.findById(id);
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

module.exportDefault(BaseRepository);