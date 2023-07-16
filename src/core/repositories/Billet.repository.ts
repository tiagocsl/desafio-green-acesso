import { IBillet } from '@core_interfaces/Billet.interface';

export interface IBilletRepository {
    saveBilletData(billet: IBillet): Promise<IBillet | null>;
    findByBilletCode(billetCode: string): Promise<IBillet | null>;
}
