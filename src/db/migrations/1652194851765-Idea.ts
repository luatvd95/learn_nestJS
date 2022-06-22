import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Idea1652194851765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "ideas",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: "increment", // auto increment
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        ), true
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ideas', true);
    }

}
