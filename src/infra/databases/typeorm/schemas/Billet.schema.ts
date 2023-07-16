import { EntitySchema } from 'typeorm';

import { Billet } from 'core/entities/Billet.entity';

export const PlaceSchema = new EntitySchema<Billet>({
    name: 'Billet',
    tableName: 'Billet',
    target: Billet,
    columns: {
        id: {
            type: 'int',
            primary: true,
            unique: true,
            nullable: false,
            generated: 'increment',
        },
        residentName: {
            type: 'varchar',
            nullable: false,
        },
        lotId: {
            type: 'varchar',
            nullable: false,
        },
        value: {
            type: 'varchar',
            nullable: false,
        },
        billetCode: {
            type: 'varchar',
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
