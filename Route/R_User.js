const { Router } = require("express");
const User = require("../models/User");
const checkAuth = require("../middlewares/checkauth");
const router = new Router();


router.get("/User", checkAuth({ transient: true }), async (req, res, next) => {
    if (req.user) {
      req.query.idUser = req.user.idUser;
    }
    const users = await User.findAll({
      where: req.query,
    });
    res.json(users);
  });


router.get("/User/:idUser", async (req, res, next) => {
    if (req.user.id !== parseInt(req.params.id)) return res.sendStatus(403);
    const user = await User.findByPk(parseInt(req.params.id));
    if (!user) res.sendStatus(404);
    else res.json(user);
  });


  router.post("/User", async (req, res, next) => {
    try {
      res.status(201).json(await User.create(req.body));
    } catch (error) {
      next(error);
    }
  });
  

router.put("/User/:idUser", async (req, res, next) => {
    try {
      const result = await User.destroy({
        where: {
            idUser: req.params.idUser,
        },
      });
      const user = await User.create({
        ...req.body,
        idUser: req.params.idUser,
      });
  
      res.status(result ? 200 : 201).json(user);
    } catch (e) {
      next(e);
    }
  });


  router.delete("/User/:idUser", async (req, res, next) => {
    try{
        const result = await User.destroy({
            where: {
                idUser: parseInt(req.params.idUser),
            },
        });
        res.sendStatus(result ? 204 : 404);
   } catch (error) {
    next(error);
   }
});


module.exports = router;