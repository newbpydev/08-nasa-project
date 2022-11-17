"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abortLaunchById = exports.addNewLaunch = exports.getAllLaunches = exports.existsLaunchWithId = void 0;
const launches = new Map();
let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    target: "Kepler-442 b",
    customer: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
};
launches.set(launch.flightNumber, launch);
// @                                   existsLaunchWithId()
function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}
exports.existsLaunchWithId = existsLaunchWithId;
// @                                   getAllLaunches()
function getAllLaunches() {
    // # launches.values() return an iterable
    return Array.from(launches.values());
}
exports.getAllLaunches = getAllLaunches;
function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        customer: ["Zero to Mastery", "NASA"],
        upcoming: true,
        success: true,
        flightNumber: latestFlightNumber,
    }));
}
exports.addNewLaunch = addNewLaunch;
// @                                   abortLaunchById()
function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    if (aborted) {
        aborted.upcoming = false;
        aborted.success = false;
        return aborted;
    }
}
exports.abortLaunchById = abortLaunchById;
