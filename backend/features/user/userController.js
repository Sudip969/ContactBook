const service = require("./userService");
const bcrypt = require("bcryptjs");
const contObj = {

  //insert controller
  async insert(req, res) {
    req.body.password=await bcrypt.hash(req.body.password,8)
    res.send(await service.insert(req));
  },
  //login controller
  async login(req, res) {
    res.send(await service.login(req));
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
