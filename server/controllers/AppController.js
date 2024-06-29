import dbClient from '../utils/db';

const status = (req, res) => {
  res.send({
    db: dbClient.isAlive(),
  });
};

const stats = async (req, res) => {
  res.send({
    users: await dbClient.nbUsers(),
  });
};

export { status, stats };
