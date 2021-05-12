"use strict";var mongoose;module.link('mongoose',{default(v){mongoose=v}},0);
class Database {
  static async connect() {
      const connectionString =  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ayo-lrkjt.gcp.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`;
      
      mongoose.Promise = global.Promise;
      mongoose.connect(connectionString, { 
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
  }
}

module.exportDefault(Database);