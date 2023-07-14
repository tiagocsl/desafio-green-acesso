import { IRouter, Request, Response, Router } from 'express';
import StatusCode from 'http-status-codes';

import multerConfig from '../middlewares/multer.middle';

const sendBillet = () => async (req: Request, res: Response) => {
    console.log(req.file?.buffer.toString('utf-8'));
    return res.sendStatus(StatusCode.OK);
};

export default function configureBilletRouter(): IRouter {
    const router: IRouter = Router();

    router.post('/send-billet', multerConfig.single('billet'), sendBillet());

    return router;
}
