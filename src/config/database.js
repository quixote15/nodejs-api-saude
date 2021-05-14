import mongoose from 'mongoose';
class Database {
  static async connect() {
      const {
        MONGODB_NAME,
        MONGODB_USERNAME,
        MONGODB_PASSWORD,
        MONGODB_HOST,
      } =  process.env
      const connectionString =  `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}:27017/${MONGODB_NAME}?authSource=admin`;
      console.log(connectionString)
      mongoose.Promise = global.Promise;
      mongoose.connect(connectionString, { 
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      mongoose.connection.on('error', function() {
          console.log('Could not connect to MongoDB');
      });

      mongoose.connection.on('disconnected', function(){
          console.log('Lost MongoDB connection...');
      });
      mongoose.connection.on('connected', function() {
          console.log('Connection established to MongoDB');
      }); 

      mongoose.connection.on('reconnected', function() {
          console.log('Reconnected to MongoDB');
      });
  }
}

export default Database