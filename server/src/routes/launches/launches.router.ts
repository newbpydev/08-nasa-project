import express from "express";
import { httpGetAllLaunches } from "./launches.controller";

const launchRouter = express.Router();

launchRouter.get("/launches", httpGetAllLaunches);

export default launchRouter;
