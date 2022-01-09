import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class Tasks implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "task",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "situation",
            type: "enum",
            isNullable: false,
            enum: ["pendente", "iniciada", "concluída", "cancelada"],
            default: "pendente",
          },
          {
            name: "priority",
            type: "int",
            isNullable: false,
          },
          {
            name: "deadline",
            type: "datetime",
            isNullable: false,
          },
          {
            name: "categoryId",
            type: "int",
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
      "task",
      new TableForeignKey({
        columnNames: ["categoryId"],
        referencedColumnNames: ["id"],
        referencedTableName: "category",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("task");
  }
}
