import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { User } from "../models/user";
dotenv.config();

const DB = process.env.DB;
const PORT = process.env.PORT || 27017;
const HOST = process.env.HOST || 'localhost';

class DBClient {
  constructor(port = PORT, host = HOST, dbName = DB) {
    this.url = `mongodb://${host}:${port}/${dbName}`;
    this.isConnected = false;

    console.log(this.url);
    this.client = mongoose.connect(this.url)
    .then(() => {
      console.log(`Connected to ${dbName} database`);
      this.isConnected = true;
    })
    .catch((err) => {
      console.error('Connection error:', err);
    });
  }

  isAlive() {
    return this.isConnected;
  }

  async nbUsers() {
    if (!this.isAlive()) {
      throw new Error('Database is not connected');
    }

    const count = await User.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();
export default dbClient;
