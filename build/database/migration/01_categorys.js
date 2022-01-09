"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Categorys = void 0;

var _typeorm = require("typeorm");

class Categorys {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "category",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        isGenerated: true
      }, {
        name: "name",
        type: "varchar(250)",
        isNullable: false
      }, {
        name: "description",
        type: "longtext",
        isNullable: false
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
  }

  async down(queryRunner) {
    await queryRunner.dropTable("category");
  }

}

exports.Categorys = Categorys;