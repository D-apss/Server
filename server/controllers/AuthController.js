const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const {User, Item, Bid, sequelize} = require("../models/index")

module.exports = class AuthController {
  static async register(req, res, next) {
    try {
      const user = await User.create(req.body);
      const data = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password", "updatedAt", "createdAt"],
        },
      });

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
       const { email, password } = req.body;
       if (!email) throw { name: "EmailRequired" };
       if (!password) throw { name: "PasswordRequired" };

       const user = await User.findOne({ where: { email } });
       if (!user) throw { name: "InvalidUser" };

       const comparedUser = comparePassword(password, user.password);
       if (!comparedUser) throw { name: "InvalidUser" };

       const access_token = signToken({ id: user.id });

       res.status(200).json({ message: "Success Login", access_token });
    } catch (error) {
       next(error);
    }
 }
};
