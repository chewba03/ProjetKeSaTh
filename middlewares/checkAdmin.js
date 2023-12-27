const User = require("../models/User");

module.exports = ({ Admin = false } = {}) =>
  async function checkAdmin(req, res, next) {
    try{
        const userid=req.User.idUser;
        const user = await User.findByPk(userid);

        if(!user || user.role !== 'admin'){
            return Admin ? next() : res.sendStatus(403);
        }
        next();
    }catch (error){
        res.sendStatus(500);
    }
  }
