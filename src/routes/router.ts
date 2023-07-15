import { IRouter, Router } from 'express';

import configureBilletRouter from './Billet.route';
import { BilletUsecases } from '@core_usecases/Billet.usecase';

const configureRouter = (billetUsecases: BilletUsecases): IRouter => {
    const router: IRouter = Router();

    router.use('/billet', configureBilletRouter(billetUsecases));

    return router;
};

export default configureRouter;
