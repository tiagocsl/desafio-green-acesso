import { IBillet, IBilletProps } from '@core_interfaces/Billet.interface';

export class Billet {
    private _id: number;
    private _residentName: string;
    private _lotId: number;
    private _value: number;
    private _billetCode: string;
    private _active: boolean;
    private _createdAt: Date;
    private _updatedAt: Date;

    constructor(props: IBillet) {
        this._id = props.id;
        this._residentName = props.residentName;
        this._lotId = props.lotId;
        this._value = props.value;
        this._billetCode = props.billetCode;
        this._active = props.active;
        this._createdAt = props.createdAt;
        this._updatedAt = props.updatedAt;
    }

    static create(billetProps: IBilletProps) {
        const date = new Date();
        return new Billet({
            ...billetProps,
            id: 0,
            active: true,
            createdAt: date,
            updatedAt: date,
        });
    }

    public get id(): number {
        return this._id;
    }

    private set id(value: number) {
        this._id = value;
        this._updatedAt = new Date();
    }

    public get residentName(): string {
        return this._residentName;
    }

    public set residentName(value: string) {
        this._residentName = value;
        this._updatedAt = new Date();
    }

    public get lotId(): number {
        return this._lotId;
    }

    public set lotId(value: number) {
        this._lotId = value;
        this._updatedAt = new Date();
    }

    public get value(): number {
        return this._value;
    }

    public set value(value: number) {
        this._value = value;
        this._updatedAt = new Date();
    }

    public get billetCode(): string {
        return this._billetCode;
    }

    public set billetCode(value: string) {
        this._billetCode = value;
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
