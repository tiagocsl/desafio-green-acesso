import express from 'express';
import configureRouter from './routes/router';
import { BilletUsecases } from '@core_usecases/Billet.usecase';
import { BilletTypeormRepository } from 'typeorm/repository/Billet.repository';
import { AppDataSource } from './typeorm/Datasource';

const app = express();

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });

const billetRepositoryImpl = new BilletTypeormRepository();
const billetUsecases = new BilletUsecases(billetRepositoryImpl);

app.use(configureRouter(billetUsecases));

app.listen(3000, () => console.log('Server is listening on port 3000'));
