"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _typeorm = require("typeorm");

class Users {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "user",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "fullname",
        type: "varchar(250)",
        isNullable: false
      }, {
        name: "profile",
        type: "varchar(500)",
        isNullable: false
      }, {
        name: "email",
        type: "varchar(100)",
        isNullable: false
      }, {
        name: "password",
        type: "varchar(100)",
        isNullable: false
      }, {
        name: "access",
        type: "enum",
        isNullable: false,
        enum: ["admin", "user"],
        default: "user"
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
    await queryRunner.dropTable("user");
  }

}

exports.Users = Users;