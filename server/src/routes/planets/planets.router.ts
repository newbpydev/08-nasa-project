import express from "express";

import { httpGetAllPlanets } from "./planets.controller";

const planetRouter = express.Router();

// @ routes
planetRouter.get("/planets", httpGetAllPlanets);

export default planetRouter;
