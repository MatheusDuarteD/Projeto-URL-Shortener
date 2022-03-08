import mongoose from 'mongoose'
import { config } from '../config/Constants'

export class MongoConnection {
  public async connect(): Promise<void>{
    try {
      await mongoose.connect(config.MONGO_CONNECTION)
      console.log("Database connected")
      // mongoose.connect(config.MONGO_CONNECTION, )
      
    } catch (error) {
      console.error(error.message)
      process.exit(1)
    }
  }
}