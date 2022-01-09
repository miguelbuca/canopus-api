"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;

var _User = require("../models/User");

var _createUser = _interopRequireDefault(require("../services/user/createUser.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async index(request, response) {
    throw new Error("Method not implemented.");
  }

  async store(request, response) {
    const {
      fullname,
      email,
      profile,
      password,
      access
    } = request.body;
    const user = new _createUser.default();
    const res = user.execute(new _User.User({
      fullname,
      email,
      profile,
      password,
      access
    }));
    return {
      success: true,
      data: res
    };
  }

  async show(id) {
    throw new Error("Method not implemented.");
  }

  async update(id, request, response) {
    throw new Error("Method not implemented.");
  }

  async delete(id) {
    throw new Error("Method not implemented.");
  }

}

exports.UserController = UserController;