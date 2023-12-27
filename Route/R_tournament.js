const { Router } = require("express");
const tournament = require("../models/tournament");
const checkAuth = require("../middlewares/checkAuth");
const checkAdmin = require("../middlewares/checkAdmin");
const router = new Router();

router.get("/tournament", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const tournaments=await tournament.findAll();
        res.status(200).json(tournaments);
      } catch (error) {
        next(error);
      }
});

router.get("/tournament/:idTour", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const tournament1=await tournament.findbyPk(req.params.idTour);
        if(!tournament1){
            res.sendStatus(404);
        }
        res.status(200).json(tournament1);
    } catch (error) {
        next(error);
    }
});

router.post("/tournament", checkAuth({ transient: true }),checkAdmin({ Admin : true }) ,async (req, res, next) => {
    try {
        const newtournament=await tournament.create(req.body);
        res.status(201).json(newtournament);
      } catch (error) {
        next(error);
      }
});





router.put("/tournament/:idTour", checkAuth({ transient: true }), checkAdmin({ Admin : true }),async (req, res, next) => {
    try {
        const tournament1 =await tournament.findByPK(req.params.idTour);
        if (!tournament1){
            res.sendStatus(404);
        }
        await tournament.update(req.body);
        res.status(200).json(tournament1);
      } catch (error) {
        next(error);
      }
});

router.delete("/tournament/:idTour", checkAuth({ transient: true }), checkAdmin({ Admin : true }),async (req, res, next) => {
    try {
        const delTournament =await tournament.destroy({
            where: {
                idTour: req.params.idTour,
            } ,
        });
        
        res.sendStatus(delTournament ? 204 : 404);
      } catch (error) {
        next(error);
      }
});


module.exports = router;