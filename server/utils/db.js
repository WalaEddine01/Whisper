import { MongoClient } from 'mongodb';

class DBClient {
  constructor(port = 27017, host = 'localhost', db = 'files_manager') {
    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.db = null;
    this.isConnected = false;

    this.client.connect().then(() => {
      this.db = this.client.db(db);
      this.isConnected = true;
    }).catch((err) => {
      console.log("didn't connect", err);
    });
  }

  isAlive() {
    return this.isConnected && this.db !== null;
  }

  async nbUsers() {
    const collection = await this.db.collection('users');
    const count = await collection.countDocuments();
    return count;
  }

  async nbFiles() {
    const collection = await this.db.collection('files');
    const count = await collection.countDocuments();
    return count;
  }
}

const dbClient = new DBClient();
export default dbClient;
