import { ILot } from '@core_interfaces/Lot.interface';

export interface ILotRepository {
    registerAnLot(lot: ILot): Promise<ILot | null>;
    findByLotNumber(lotNumber: number): Promise<ILot | null>;
}
