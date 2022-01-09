"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = require("../controllers/user.controller");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)();
const {
  store
} = new _user.UserController();
router.post("/user", store);
var _default = router;
exports.default = _default;