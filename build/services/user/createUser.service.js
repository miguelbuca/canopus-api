"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = require("../../models/User");

var _User2 = _interopRequireDefault(require("../../repositories/User.repository "));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateUser {
  async execute(props) {
    try {
      const userRepository = (0, _typeorm.getCustomRepository)(_User2.default);
      const alreadyExistsUser = await userRepository.find({
        where: {
          email: props.email
        }
      });

      if (alreadyExistsUser.length > 0) {
        throw new Error("Already Exists this user.");
      }

      const user = new _User.User(props);
      return await userRepository.save(user);
    } catch (err) {
      throw new Error(err.message);
    }
  }

}

exports.default = CreateUser;