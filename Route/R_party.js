const { Router } = require("express");
const Party = require("../models/Party");
const checkAuth = require("../middlewares/checkAuth");
const router = new Router();

router.get("/Party", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const party=await Party.findAll();
        res.status(200).json(party);
      } catch (error) {
        next(error);
      }
});

router.get("/Party/:idParty", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const Party1=await Party.findByPk(req.params.idParty);
        if(!Party1){
            res.sendStatus(404).json("Lien incorrect!");
        }
        res.status(200).json(Party1);
    } catch (error) {
        next(error);
    }
});

router.post("/Party", async (req, res, next) => {
    try {
        const newParty=await Party.create(req.body);
        res.status(201).json(newParty);
      } catch (error) {
        res.status(400).json("Erreur, impossible de crÃ©er party");
        next(error);
      }
});



router.delete("/Party/:idParty", checkAuth({ transient: true }),async (req, res, next) => {
   
    try {
            const endOfTheParty =await Party.destroy({
                where: {
                    idParty: req.params.idParty,
                } ,
            });
            
            res.sendStatus(endOfTheParty ? 204 : 404);
        } catch (error) {
            next(error);
        }
    });

module.exports = router;