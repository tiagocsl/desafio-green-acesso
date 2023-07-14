import express from 'express';
import configureRouter from './routes/router';

const app = express();

app.use(configureRouter());

app.listen(3000, () => console.log('Server is listening on port 3000'));
