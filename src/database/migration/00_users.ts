import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "fullname",
            type: "varchar(250)",
            isNullable: false,
          },
          {
            name: "profile",
            type: "varchar(500)",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar(100)",
            isNullable: false,
          },
          {
            name: "access",
            type: "enum",
            isNullable: false,
            enum: ["admin", "user"],
            default: "user",
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
    await queryRunner.dropTable("user");
  }
}
