"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

const connection = {
  async createConnections() {
    await (0, _typeorm.createConnections)();
  },

  async create() {
    await (0, _typeorm.createConnection)();
  },

  async createTestConnection() {
    await (0, _typeorm.createConnection)('testing');
  },

  async close() {
    await (0, _typeorm.getConnection)().close();
  },

  async clear() {
    const connection = (0, _typeorm.getConnection)();
    const entities = connection.entityMetadatas;
    entities.map(async entity => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  }

};
var _default = connection;
exports.default = _default;