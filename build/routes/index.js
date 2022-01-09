"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _base = _interopRequireDefault(require("./base.routes"));

var _user = _interopRequireDefault(require("./user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes
const router = (0, _express.default)();
router.use(_base.default);
router.use(_user.default);
var _default = router;
exports.default = _default;