const { Router } = require("express");
const Profile = require("../models/Profile");
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");
const router = new Router();
router.use(checkAdmin);
router.use(checkAuth);


router.get("/Profile", checkAuth({ transient: true }), checkAdmin({ Admin : true }),async (req, res, next) => {
    try {
        const Profiles=await Profile.findAll();
        res.status(200).json(Profiles);
      } catch (error) {
        next(error);
      }
});

router.get("/Profile/:idUser", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const Profile1=await Profile.findbyPk(req.params.idUser);
        if(!Profile1){
            res.sendStatus(404);
        }
        res.status(200).json(Profile1);
    } catch (error) {
        next(error);
    }
});

router.post("/Profile", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const newProfile=await Profile.create(req.body);
        res.status(201).json(newProfile);
      } catch (error) {
        next(error);
      }
});


router.put("/Profile/:idUser", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const profile =await Profile.findByPK(req.params.idUser);
        if (!profile){
            res.sendStatus(404);
        }
        await profile.update(req.body);
        res.status(200).json(profile);
      } catch (error) {
        next(error);
      }
});

router.delete("/Profile/:idUser", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const delProfile =await Profile.destroy({
            where: {
                idUser: req.params.idUser,
            } ,
        });
        
        res.sendStatus(delskin ? 204 : 404);
      } catch (error) {
        next(error);
      }
});


module.exports = router;