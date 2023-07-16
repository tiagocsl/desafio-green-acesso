import { ILot, ILotProps } from '@core_interfaces/Lot.interface';

export class Lot {
    private _id: number;
    private _lotNumber: number;
    private _active: boolean;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(props: ILot) {
        this._id = props.id;
        this._lotNumber = props.lotNumber;
        this._active = props.active;
        this._createdAt = props.createdAt;
        this._updatedAt = props.updatedAt;
    }

    static create(billetProps: ILotProps) {
        const date = new Date();
        return new Lot({
            ...billetProps,
            id: 0,
            createdAt: date,
            updatedAt: date,
        });
    }

    public get id(): number {
        return this._id;
    }

    private set id(idNumber: number) {
        this._id = idNumber;
        this._updatedAt = new Date();
    }

    public get lotNumber(): number {
        return this._lotNumber;
    }

    public set lotNumber(value: number) {
        this._lotNumber = value;
        this._updatedAt = new Date();
    }

    public get active(): boolean {
        return this._active;
    }

    public set active(value: boolean) {
        this._active = value;
        this._updatedAt = new Date();
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get updatedAt(): Date {
        return this._updatedAt;
    }

    public set updatedAt(value: Date) {
        this._updatedAt = value;
    }
}
