import express from 'express';
import router from './routes/index';


const app = express();

app.use(express.json());
app.use('/', router);

app.listen(5000, () => {
  console.log(`Server ready at http://localhost:${5000}`)
});
