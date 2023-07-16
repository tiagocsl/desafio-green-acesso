import { IRouter, Request, Response, Router } from 'express';
import StatusCode from 'http-status-codes';

import multerConfig from '../middlewares/multer.middle';
import { billetCSVParser } from '@utils/Buffer-parsers.util';
import { BilletUsecases } from '@core_usecases/Billet.usecase';

const sendBillet =
    (usecases: BilletUsecases) => async (req: Request, res: Response) => {
        const { file } = req;
        const buffer = file?.buffer;

        const billetData = await billetCSVParser(buffer as Buffer);
        billetData.shift();
        const savedBillets = await usecases.saveBilletData(billetData);

        return res.status(StatusCode.CREATED).json(savedBillets);
    };

export default function configureBilletRouter(
    billetUsecases: BilletUsecases
): IRouter {
    const router: IRouter = Router();

    router.post(
        '/send-billet',
        multerConfig.single('billet'),
        sendBillet(billetUsecases)
    );

    return router;
}
