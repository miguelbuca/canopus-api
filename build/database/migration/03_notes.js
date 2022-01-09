"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notes = void 0;

var _typeorm = require("typeorm");

class Notes {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "note",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "description",
        type: "longtext",
        isNullable: false
      }, {
        name: "taskId",
        type: "uuid"
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
    queryRunner.createForeignKey("note", new _typeorm.TableForeignKey({
      columnNames: ["taskId"],
      referencedColumnNames: ["id"],
      referencedTableName: "task",
      onDelete: "CASCADE"
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("user");
  }

}

exports.Notes = Notes;