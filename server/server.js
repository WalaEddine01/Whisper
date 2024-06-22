import express from 'express';
import router from './routes/index';

const PORT = process.env.PORT || 5000;

const app = express();
// we need to add socket.io
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
