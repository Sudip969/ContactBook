const User = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwtToken = require("../JwtToken/jwtToken.js");
const jwt = require("jsonwebtoken");
const repObj = {
  //repo for insert
  async insert(req) {
    try {
      let token = await jwtToken(req.body);
      let user = await User.create({
        user_name: req.body.user_name,
        user_email: req.body.user_email,
        password: req.body.password,
        tokens: token,
      });
      return user;
    } catch (er) {
      return "Email Should Be Unique";
    }
  },
  //repo for Login
  async login(req) {
    const user = await User.findOne({
      where: { user_email: req.body.user_email },
    });

    if (user) {
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        let token = await jwtToken(user);
        await User.update(
          { tokens: token },
          { where: { user_id: user.user_id } }
        );
        return user;
      } else {
        return "Invalid Password";
      }
    } else {
      return "Invalid Email";
    }
  },

  //repo for select
  async select(req) {
    let userEmail = null;
    jwt.verify(req.params.token, "mysecrettoken", (err, decoded) => {
      if (err) {
        return "wrong token";
      } else {
        userEmail = decoded.user_email;
      }
    });
    // console.log(req.params.token)
    const data = await User.findOne({ where: { user_email: userEmail } });
    if (data) {
      return data;
    }
    return "No such Data present";
  },

  //repo for delete
  async delete(req) {
    await User.destroy({ where: { id: req.params.id } });
    return "Row deleted successfully";
  },

  //repo for update
  async update(req) {
    const data = await User.findOne({ where: { id: req.params.id } });
    if (data) {
      await User.update(req.body, { where: { id: req.params.id } });
      return "Row updated successfully";
    }
    return "No such Id present";
  },
};

module.exports = repObj;
