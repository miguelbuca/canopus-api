"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Task = require("../models/Task");

var _dec, _class;

let TaskRepository = (_dec = (0, _typeorm.EntityRepository)(_Task.Task), _dec(_class = class TaskRepository extends _typeorm.Repository {}) || _class);
exports.default = TaskRepository;