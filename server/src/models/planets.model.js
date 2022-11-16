"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPlanets = exports.loadPlanetsData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const csv_parse_1 = require("csv-parse");
const habitablePlanets = [];
function isHabitablePlanet(planet) {
    return (planet["koi_disposition"] === "CONFIRMED" &&
        planet["koi_insol"] > 0.36 &&
        planet["koi_insol"] < 1.11 &&
        planet["koi_prad"] < 1.6);
}
// * fs createReadStream()
// @ Promise example:
/*
const promise = new Promise((resolve, reject) => {
  resolve(43);
});

promise.then((result) => {})

const result = await promise;
console.log(result);
*/
function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs_1.default.createReadStream(path_1.default.join(__dirname, "..", "..", "data", "kepler_data.csv"))
            // @ pipe parse()
            .pipe((0, csv_parse_1.parse)({
            comment: "#",
            columns: true,
        }))
            // @ stream data line by line?
            .on("data", (data) => {
            if (isHabitablePlanet(data))
                habitablePlanets.push(data);
        })
            .on("error", (err) => {
            console.log(err);
            reject(err);
        })
            // @ at the end show the result
            .on("end", () => {
            // console.log(habitablePlanets.map((planet) => planet["kepler_name"]));
            console.log(`${habitablePlanets.length} habitable planets found!`);
            // console.log("Done!");
            resolve(habitablePlanets);
        });
    });
}
exports.loadPlanetsData = loadPlanetsData;
function getAllPlanets() {
    return habitablePlanets;
}
exports.getAllPlanets = getAllPlanets;
// export { loadPlanetsData, habitablePlanets as planets };
