import { BilletUsecases } from '@core_usecases/Billet.usecase';
import { BilletTypeormRepository } from '@infra_databases/typeorm/repository/Billet.repository';
import { AppDataSource } from '@infra_databases//typeorm/Datasource';
import { LotTypeormRepository } from '@infra_databases/typeorm/repository/Lot.repository';
import { LottUsecases } from 'core/usecases/Lot.usecase';

import express, { Application } from 'express';
import cors from 'cors';

import morganMiddleware from '@infra_middlewares/morgan.middleware';
import configureRouter from '@infra_controllers/rest/router';

class App {
    public express: Application;
    lotRepositoryImpl = new LotTypeormRepository();
    billetRepositoryImpl = new BilletTypeormRepository();

    lotUsecases = new LottUsecases(this.lotRepositoryImpl);
    billetUsecases = new BilletUsecases(
        this.billetRepositoryImpl,
        this.lotUsecases
    );

    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
        AppDataSource.initialize()
            .then(() => {
                console.log('Data Source has been initialized!');
            })
            .catch((err: unknown) => {
                console.error('Error during Data Source initialization:', err);
            });
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
        this.express.use(morganMiddleware);
    }

    private routes(): void {
        this.express.get('/', (req, res) => {
            return res.send('hello world');
        });
        this.express.use('/api', configureRouter(this.billetUsecases));
    }
}

export default new App().express;
