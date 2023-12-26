const { Router } = require("express");
const Skin = require("../models/Skin");
const checkAuth = require("../middlewares/checkAuth");
const router = new Router();

router.get("/Skin", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const skins=await Skin.findAll();
        res.status(200).json(skins);
      } catch (error) {
        next(error);
      }
});

router.get("/Skin/:idSkin", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const skin1=await Skin.findByPK(req.params.idSkin);
        if (!skin1){
            res.sendStatus(404);
        }
        res.status(200).json(skin1);
      } catch (error) {
        next(error);
      }
});

router.post("/Skin", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const newSkin=await Skin.create(req.body);
        res.status(201).json(newSkin);
      } catch (error) {
        next(error);
      }
});


router.put("/Skin/:idSkin", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const skin1=await Skin.findByPK(req.params.idSkin);
        if (!skin1){
            res.sendStatus(404);
        }
        await skin1.update(req.body);
        res.status(200).json(skin1);
      } catch (error) {
        next(error);
      }
});

router.delete("/Skin/:idSkin", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const delskin=await Skin.destroy({
            where: {
                idSkin: req.params.idSkin,
            } ,
        });
        
        res.sendStatus(delskin ? 204 : 404);
    } catch (error) {
        next(error);
    
    }
});

module.exports =router;

    
