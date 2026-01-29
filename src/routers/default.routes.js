import express from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = express.Router();

//GET all wines
router.get("/wines", wineController.getAllWines);

//GET wine by id
router.get("/wines/:id", wineController.getWineById);

//POST create new wine
router.post("/wines", wineController.createWine);

//PUT update wine
router.put("/wines/:id", wineController.updateWine);

//DELETE remove wine
router.delete("/wines/:id", wineController.deleteWine);

export default router;