import { Launch } from "../../types/launch";

const launches = new Map<number, Launch>();

let latestFlightNumber = 100;

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

function addNewLaunch(launch: Launch) {
  latestFlightNumber++;

  launches.set(
    latestFlightNumber,
    Object.assign<Launch, Launch>(launch, {
      customer: ["Zero to Mastery", "NASA"],
      upcoming: true,
      success: true,
      flightNumber: latestFlightNumber,
    })
  );
}

export { getAllLaunches, addNewLaunch };
