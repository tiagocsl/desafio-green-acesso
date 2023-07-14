import { IRouter, Router } from 'express';

import configureBilletRouter from './billet.route';

const configureRouter = (): IRouter => {
    const router: IRouter = Router();

    router.use('/billet', configureBilletRouter());

    return router;
};

export default configureRouter;
