import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Categorys implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "category",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true
          },
          {
            name: "name",
            type: "varchar(250)",
            isNullable: false,
          },
          {
            name: "description",
            type: "longtext",
            isNullable: false,
          },
          {
            name: "createdAt",
            type: "datetime",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "datetime",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("category");
  }
}
