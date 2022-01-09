"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = require("../models/User");

var _dec, _class;

let UserRepository = (_dec = (0, _typeorm.EntityRepository)(_User.User), _dec(_class = class UserRepository extends _typeorm.Repository {}) || _class);
exports.default = UserRepository;