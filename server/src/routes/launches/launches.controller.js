"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAbortLaunch = exports.httpAddNewLaunch = exports.httpGetAllLaunches = void 0;
const launches_model_1 = require("../../models/launches.model");
// @                                          Get All Launches
function httpGetAllLaunches(req, res) {
    return res.status(200).json((0, launches_model_1.getAllLaunches)());
}
exports.httpGetAllLaunches = httpGetAllLaunches;
// @                                            Add New Launch
function httpAddNewLaunch(req, res) {
    const launch = req.body;
    // # missing property
    if (!launch.mission ||
        !launch.rocket ||
        !launch.launchDate ||
        !launch.target) {
        res.status(400).json({
            error: "Missing required launch property",
        });
    }
    if (launch.launchDate)
        launch.launchDate = new Date(launch.launchDate);
    // # if launchdate is a number, dates.valueof() returns a number
    // if (launch.launchDate?.toString() === "Invalid Date")
    if (launch.launchDate && isNaN(launch.launchDate.valueOf()))
        return res.status(400).json({
            error: "Invalid launch date",
        });
    (0, launches_model_1.addNewLaunch)(launch);
    return res.status(201).json(launch);
}
exports.httpAddNewLaunch = httpAddNewLaunch;
// @                                                 Abort Launch
function httpAbortLaunch(req, res) {
    const launchId = parseInt(req.params.id);
    //# if launch doesn't exist
    if (!(0, launches_model_1.existsLaunchWithId)(launchId)) {
        return res.status(404).json({
            error: "Launch not found",
        });
    }
    else {
        //# if launch exists
        const aborted = (0, launches_model_1.abortLaunchById)(launchId);
        res.status(200).json(aborted);
    }
}
exports.httpAbortLaunch = httpAbortLaunch;
