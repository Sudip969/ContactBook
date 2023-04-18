const service = require("./userService");
const bcrypt = require("bcryptjs");
const contObj = {
  //insert controller
  async insert(req, res) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    res.send(await service.insert(req));
  },
  //login controller
  async login(req, res) {
    const user = await service.login(req);
    res.send(user);
  },
  //Google login
  async googleLogin(req, res) {
    res.send(await service.googleLogin(req));
  },

  //select controller
  async select(req, res) {
    res.send(await service.select(req));
  },

  //delete controller
  async delete(req, res) {
    res.send(await service.delete(req));
  },

  //update controller
  async update(req, res) {
    res.send(await service.update(req));
  },
};
module.exports = contObj;
