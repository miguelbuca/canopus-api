"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenvSafe = _interopRequireDefault(require("dotenv-safe"));

var _routes = _interopRequireDefault(require("src/routes"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenvSafe.default.config({
  allowEmptyValues: true,
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.development"
});

const app = (0, _express.default)();

_database.default.create();

app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_routes.default);
var _default = app;
exports.default = _default;