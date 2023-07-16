import { Repository } from 'typeorm';

import { Billet } from '@core_entities/Billet.entity';
import { IBillet } from '@core_interfaces/Billet.interface';
import { IBilletRepository } from '@core_repositories/Billet.repository';
import { AppDataSource } from '../Datasource';

export class BilletTypeormRepository implements IBilletRepository {
    private ormRepo: Repository<Billet>;
    constructor() {
        this.ormRepo = AppDataSource.getRepository('Billet');
    }

    async saveBilletData(billet: IBillet): Promise<Billet | null> {
        try {
            const insertedBillet = await this.ormRepo.save({
                billetCode: billet.billetCode,
                residentName: billet.residentName,
                lotId: billet.lotId,
                value: billet.value,
                createdAt: billet.createdAt,
                updatedAt: billet.updatedAt,
                active: true,
            });
            return insertedBillet;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findByBilletCode(billetCode: string): Promise<IBillet | null> {
        try {
            const billet = await this.ormRepo.findOneBy({ billetCode });
            return billet;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
