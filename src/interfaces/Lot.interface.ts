export interface ILot {
    id: number;
    lotNumber: number;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface ILotProps {
    lotNumber: number;
    active: boolean;
}

export interface ISaveNewLotsResponse {
    existingLots: ILotProps[];
    newLots: ILot[];
    lotsWithErrors: ILotProps[];
}
