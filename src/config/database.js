import mongoose from 'mongoose';
class Database {
  static async connect() {
      const {
        MONGODB_NAME,
        MONGODB_USERNAME,
        MONGODB_PASSWORD,
        MONGODB_HOST,
      } =  process.env
      const connectionString =  `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_NAME}`;
      
      mongoose.Promise = global.Promise;
      mongoose.connect(connectionString, { 
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
  }
}

export default Database