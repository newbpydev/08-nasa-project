import express from "express";
import {
  httpAddNewLaunch,
  httpGetAllLaunches,
  httpAbortLaunch,
} from "./launches.controller";

const launchRouter = express.Router();

launchRouter.get("/", httpGetAllLaunches);
launchRouter.post("/", httpAddNewLaunch);
launchRouter.delete("/:id", httpAbortLaunch);

export default launchRouter;
