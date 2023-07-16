export interface IBillet {
    id: number;
    residentName: string;
    lotId: number;
    value: number;
    billetCode: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IBilletProps {
    residentName: string;
    lotId: number;
    value: number;
    billetCode: string;
}

export interface IReceivedBillet {
    residentName: string;
    lotNumber: number;
    value: number;
    billetCode: string;
}

export interface ISaveNewBilletsResponse {
    existingBillets: IBilletProps[];
    newBillets: IBillet[];
    billetsWithErrors: IBilletProps[];
}
