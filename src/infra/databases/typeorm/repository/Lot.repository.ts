import { Repository } from 'typeorm';

import { AppDataSource } from '../Datasource';
import { Lot } from 'core/entities/Lot.entity';
import { ILot } from '@core_interfaces/Lot.interface';
import { ILotRepository } from '@core_repositories/Lot.repository';

export class LotTypeormRepository implements ILotRepository {
    private ormRepo: Repository<Lot>;
    constructor() {
        this.ormRepo = AppDataSource.getRepository('Lot');
    }

    async registerAnLot(lot: ILot): Promise<Lot | null> {
        try {
            const insertedBillet = await this.ormRepo.save({
                lotNumber: lot.lotNumber,
                active: lot.active,
                createdAt: lot.createdAt,
                updatedAt: lot.updatedAt,
            });
            return insertedBillet;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findByLotNumber(lotNumber: number): Promise<ILot | null> {
        try {
            const lot = await this.ormRepo.findOneBy({ lotNumber });
            return lot;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
