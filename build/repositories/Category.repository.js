"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Category = require("../models/Category");

var _dec, _class;

let CategoryRepository = (_dec = (0, _typeorm.EntityRepository)(_Category.Category), _dec(_class = class CategoryRepository extends _typeorm.Repository {}) || _class);
exports.default = CategoryRepository;