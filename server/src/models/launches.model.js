"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLaunches = void 0;
const launches = new Map();
const lauch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    destination: "Kepler-442 b",
    customer: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
};
launches.set(lauch.flightNumber, lauch);
function getAllLaunches() {
    // # launches.values() return an iterable
    return Array.from(launches.values());
}
exports.getAllLaunches = getAllLaunches;
