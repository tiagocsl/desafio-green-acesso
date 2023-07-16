import { Billet } from '@core_entities/Billet.entity';
import {
    IBillet,
    IBilletProps,
    IReceivedBillet,
    ISaveNewBilletsResponse,
} from '@core_interfaces/Billet.interface';
import { IBilletRepository } from '@core_repositories/Billet.repository';
import { LottUsecases } from './Lot.usecase';

export class BilletUsecases {
    constructor(
        private billetRepository: IBilletRepository,
        private lotUsecases: LottUsecases
    ) {}

    async saveBilletData(
        multipleBilletsProps: IReceivedBillet[]
    ): Promise<ISaveNewBilletsResponse> {
        const existingBillets: IBilletProps[] = [];
        const newBillets: IBillet[] = [];
        const billetsWithErrors: IBilletProps[] = [];
        for (const billetProps of multipleBilletsProps) {
            const hasBilletCode = await this.billetRepository.findByBilletCode(
                billetProps.billetCode
            );
            if (hasBilletCode) {
                existingBillets.push({
                    ...billetProps,
                    lotId: billetProps.lotNumber,
                });
                continue;
            }

            const lotId =
                await this.lotUsecases.verifyIfLotExistsAndRegisterOrReturnId(
                    billetProps.lotNumber
                );

            const billet = Billet.create({
                ...billetProps,
                lotId: lotId,
            });

            const newBillet = await this.billetRepository.saveBilletData(
                billet
            );
            if (newBillet) {
                newBillets.push(newBillet);
            } else if (!newBillet) {
                billetsWithErrors.push({
                    ...billetProps,
                    lotId: billetProps.lotNumber,
                });
            }
        }

        return {
            existingBillets: existingBillets,
            newBillets: newBillets,
            billetsWithErrors: billetsWithErrors,
        };
    }
}
