import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Notes implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "note",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "description",
            type: "longtext",
            isNullable: false,
          },
          {
            name: "taskId",
            type: "uuid",
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

    queryRunner.createForeignKey(
      "note",
      new TableForeignKey({
        columnNames: ["taskId"],
        referencedColumnNames: ["id"],
        referencedTableName: "task",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
