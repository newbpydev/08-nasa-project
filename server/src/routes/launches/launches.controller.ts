import { Request, Response } from "express";
import { Launch } from "../../../types/launch";

import {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
} from "../../models/launches.model";

// @                                          Get All Launches
function httpGetAllLaunches(req: Request, res: Response) {
  return res.status(200).json(getAllLaunches());
}

// @                                            Add New Launch
function httpAddNewLaunch(req: Request, res: Response) {
  const launch: Launch = req.body;

  // # missing property
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    res.status(400).json({
      error: "Missing required launch property",
    });
  }

  if (launch.launchDate) launch.launchDate = new Date(launch.launchDate);

  // # if launchdate is a number, dates.valueof() returns a number
  // if (launch.launchDate?.toString() === "Invalid Date")
  if (launch.launchDate && isNaN(launch.launchDate.valueOf()))
    return res.status(400).json({
      error: "Invalid launch date",
    });

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

// @                                                 Abort Launch
function httpAbortLaunch(req: Request, res: Response) {
  const launchId = parseInt(req.params.id);

  //# if launch doesn't exist
  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  } else {
    //# if launch exists
    const aborted = abortLaunchById(launchId);
    res.status(200).json(aborted);
  }
}

export { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
