import redisClient from '../utils/redis';
import dbClient from '../utils/db';

const status = (req, res) => {
  res.send({
    redis: redisClient.isAlive(),
    db: dbClient.isAlive(),
  });
};

const stats = async (req, res) => {
  res.send({
    users: await dbClient.nbUsers(),
    files: await dbClient.nbFiles(),
  });
};

export { status, stats };
