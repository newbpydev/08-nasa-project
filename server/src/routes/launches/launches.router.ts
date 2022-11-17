import express from "express";
import { httpAddNewLaunch, httpGetAllLaunches } from "./launches.controller";

const launchRouter = express.Router();

launchRouter.get("/", httpGetAllLaunches);
launchRouter.post("/", httpAddNewLaunch);

export default launchRouter;
