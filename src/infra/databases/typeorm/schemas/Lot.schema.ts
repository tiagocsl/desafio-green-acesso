import { EntitySchema } from 'typeorm';

import { Lot } from 'core/entities/Lot.entity';

export const PlaceSchema = new EntitySchema<Lot>({
    name: 'Lot',
    tableName: 'Lot',
    target: Lot,
    columns: {
        id: {
            type: 'int',
            primary: true,
            unique: true,
            nullable: false,
            generated: 'increment',
        },
        lotNumber: {
            type: 'int',
            nullable: false,
        },
        active: {
            type: 'boolean',
            nullable: false,
        },
        createdAt: {
            type: 'timestamp without time zone',
            createDate: true,
            nullable: false,
        },
        updatedAt: {
            type: 'timestamp without time zone',
            updateDate: true,
            nullable: false,
        },
    },
});
