import { IBillet, IBilletProps } from '@core_interfaces/Billet.interface';

export class Billet {
    public id: number;
    public residentName: string;
    public lotId: number;
    public value: number;
    public billetCode: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(props: IBillet) {
        this.id = props.id;
        this.residentName = props.residentName;
        this.lotId = props.lotId;
        this.value = props.value;
        this.billetCode = props.billetCode;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
    }

    static create(billetProps: IBilletProps) {
        const date = new Date();
        return new Billet({
            ...billetProps,
            id: 0,
            createdAt: date,
            updatedAt: date,
        });
    }

    public get Id(): string {
        return this.residentName;
    }

    private set Id(idNumber: number) {
        this.id = idNumber;
        this.updatedAt = new Date();
    }

    public get ResidentName(): string {
        return this.residentName;
    }

    public set ResidentName(value: string) {
        this.residentName = value;
        this.updatedAt = new Date();
    }

    public get LotId(): number {
        return this.lotId;
    }

    public set LotId(value: number) {
        this.lotId = value;
        this.updatedAt = new Date();
    }

    public get Value(): number {
        return this.value;
    }

    public set Value(value: number) {
        this.value = value;
        this.updatedAt = new Date();
    }

    public get BilletCode(): string {
        return this.billetCode;
    }

    public set BilletCode(value: string) {
        this.billetCode = value;
        this.updatedAt = new Date();
    }

    public get CreatedAt(): Date {
        return this.createdAt;
    }

    public get UpdatedAt(): Date {
        return this.updatedAt;
    }
}
