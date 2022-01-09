"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;

var _typeorm = require("typeorm");

var _uuid = require("uuid");

var _Category = require("./Category");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

var Situation;

(function (Situation) {
  Situation["pendente"] = "pendente";
  Situation["iniciada"] = "conclu\xEDda";
  Situation["cancelada"] = "cancelada";
})(Situation || (Situation = {}));

let Task = (_dec = (0, _typeorm.Index)(["id"], {
  unique: true
}), _dec2 = (0, _typeorm.Entity)("task", {
  schema: "public"
}), _dec3 = (0, _typeorm.Column)("uuid", {
  primary: true,
  name: "id",
  default: () => "uuid_generate_v4()",
  generated: true
}), _dec4 = (0, _typeorm.Column)({
  type: 'enum',
  enum: Situation,
  default: 'pendente'
}), _dec5 = (0, _typeorm.Column)("character varying", {
  name: "description"
}), _dec6 = (0, _typeorm.Column)({
  name: "priority"
}), _dec7 = (0, _typeorm.Column)({
  type: 'datetime'
}), _dec8 = (0, _typeorm.OneToOne)(type => _Category.Category), _dec9 = (0, _typeorm.JoinColumn)(), _dec10 = (0, _typeorm.Column)("timestamp with time zone", {
  name: "created_at",
  nullable: true,
  default: () => "now()"
}), _dec11 = (0, _typeorm.Column)("timestamp with time zone", {
  name: "updated_at",
  nullable: true,
  default: () => "now()"
}), _dec(_class = _dec2(_class = (_class2 = class Task {
  constructor(props, id) {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "situation", _descriptor2, this);

    _initializerDefineProperty(this, "description", _descriptor3, this);

    _initializerDefineProperty(this, "priority", _descriptor4, this);

    _initializerDefineProperty(this, "deadline", _descriptor5, this);

    _initializerDefineProperty(this, "category", _descriptor6, this);

    _initializerDefineProperty(this, "createdAt", _descriptor7, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor8, this);

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
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "situation", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "priority", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "deadline", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "category", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.Task = Task;