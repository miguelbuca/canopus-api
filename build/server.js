"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 3333;

_app.default.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));