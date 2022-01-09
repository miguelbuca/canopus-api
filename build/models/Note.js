"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = void 0;

var _typeorm = require("typeorm");

var _uuid = require("uuid");

var _Task = require("./Task");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Note = (_dec = (0, _typeorm.Index)(["id"], {
  unique: true
}), _dec2 = (0, _typeorm.Entity)("note", {
  schema: "public"
}), _dec3 = (0, _typeorm.Column)("uuid", {
  primary: true,
  name: "id",
  default: () => "uuid_generate_v4()",
  generated: true
}), _dec4 = (0, _typeorm.Column)("character varying", {
  name: "description"
}), _dec5 = (0, _typeorm.OneToOne)(type => _Task.Task), _dec6 = (0, _typeorm.JoinColumn)(), _dec7 = (0, _typeorm.Column)("timestamp with time zone", {
  name: "created_at",
  nullable: true,
  default: () => "now()"
}), _dec8 = (0, _typeorm.Column)("timestamp with time zone", {
  name: "updated_at",
  nullable: true,
  default: () => "now()"
}), _dec(_class = _dec2(_class = (_class2 = class Note {
  constructor(props, id) {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "description", _descriptor2, this);

    _initializerDefineProperty(this, "task", _descriptor3, this);

    _initializerDefineProperty(this, "createdAt", _descriptor4, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor5, this);

    Object.assign(props);

    if (!id) {
      this.id = (0, _uuid.v4)();
    }
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "task", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.Note = Note;