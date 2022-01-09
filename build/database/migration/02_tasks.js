"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tasks = void 0;

var _typeorm = require("typeorm");

class Tasks {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "task",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "situation",
        type: "enum",
        isNullable: false,
        enum: ["pendente", "iniciada", "concluída", "cancelada"],
        default: "pendente"
      }, {
        name: "priority",
        type: "int",
        isNullable: false
      }, {
        name: "deadline",
        type: "datetime",
        isNullable: false
      }, {
        name: "categoryId",
        type: "int"
      }, {
        name: "createdAt",
        type: "datetime",
        default: "now()"
      }, {
        name: "updatedAt",
        type: "datetime",
        default: "now()"
      }]
    }));
    queryRunner.createForeignKey("task", new _typeorm.TableForeignKey({
      columnNames: ["categoryId"],
      referencedColumnNames: ["id"],
      referencedTableName: "category",
      onDelete: "CASCADE"
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("task");
  }

}

exports.Tasks = Tasks;