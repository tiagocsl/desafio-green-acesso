import fs from 'fs';

import { IRouter, Request, Response, Router } from 'express';
import StatusCode from 'http-status-codes';

import { multerConfig } from '../middlewares/multer.middle';
import { getCSVText, getPDFText } from '@utils/Buffer-parsers.util';
import { BilletUsecases } from '@core_usecases/Billet.usecase';

const sendBillet =
    (usecases: BilletUsecases) => async (req: Request, res: Response) => {
        const { file } = req;
        const type = file?.mimetype;

        const fileBuffer = fs.readFileSync('src/billet/billet');
        const uintarray = new Uint8Array(fileBuffer);
        let billetData: {
            residentName: string;
            lotNumber: number;
            value: number;
            billetCode: string;
        }[] = [];

        if (type == 'text/csv') {
            billetData = await getCSVText(fileBuffer);
            billetData.shift();
        } else if (type == 'application/pdf') {
            billetData = await getPDFText(uintarray);
        }

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
