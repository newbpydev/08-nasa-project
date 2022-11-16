import { Launch } from "./../../types/lauch";

const launches = new Map<number, Launch>();

const lauch: Launch = {
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

export { getAllLaunches };
