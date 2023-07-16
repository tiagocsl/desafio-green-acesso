import { Lot } from 'core/entities/Lot.entity';
import { ILotRepository } from '@core_repositories/Lot.repository';

export class LottUsecases {
    constructor(private lotRepository: ILotRepository) {}

    async verifyIfLotExistsAndRegisterOrReturnId(
        lotNumber: number
    ): Promise<number> {
        const hasLot = await this.lotRepository.findByLotNumber(lotNumber);
        if (hasLot) {
            return hasLot.id;
        }

        const lot = Lot.create({
            lotNumber,
            active: true,
        });

        const newLot = await this.lotRepository.registerAnLot(lot);
        if (!newLot) return 0;

        return newLot.id;
    }
}
