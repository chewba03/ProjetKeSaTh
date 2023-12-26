const { Router } = require("express");
const tournemant = require("../models/tournemant");
const checkAuth = require("../middlewares/checkAuth");
const router = new Router();

router.get("/tournemant", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const Tournemants=await tournemant.findAll();
        res.status(200).json(Tournemants);
      } catch (error) {
        next(error);
      }
});

router.get("/tournemant/:idTour", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const Tournemant1=await tournemant.findbyPk(req.params.idTour);
        if(!Tournemant1){
            res.sendStatus(404);
        }
        res.status(200).json(Tournemant1);
    } catch (error) {
        next(error);
    }
});

router.post("/tournemant", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const newTournemant=await tournemant.create(req.body);
        res.status(201).json(newTournemant);
      } catch (error) {
        next(error);
      }
});





router.put("/tournemant/:idTour", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const tournemant1 =await tournemant.findByPK(req.params.idTour);
        if (!tournemant1){
            res.sendStatus(404);
        }
        await tournemant.update(req.body);
        res.status(200).json(tournemant1);
      } catch (error) {
        next(error);
      }
});

router.delete("/tournemant/:idTour", checkAuth({ transient: true }), async (req, res, next) => {
    try {
        const delTournement =await tournemant.destroy({
            where: {
                idTour: req.params.idTour,
            } ,
        });
        
        res.sendStatus(delTournement ? 204 : 404);
      } catch (error) {
        next(error);
      }
});


module.exports = router;