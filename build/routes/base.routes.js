"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const router = (0, _express.Router)();
router.get("/", (_, res) => {
  res.status(200).json({
    author: "Miguel Buca",
    title: "Test Canopus",
    version: 1.0,
    description: "This is a simple tasks"
  });
});
var _default = router;
exports.default = _default;