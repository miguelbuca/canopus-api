"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Note = require("../models/Note");

var _dec, _class;

let NoteRepository = (_dec = (0, _typeorm.EntityRepository)(_Note.Note), _dec(_class = class NoteRepository extends _typeorm.Repository {}) || _class);
exports.default = NoteRepository;