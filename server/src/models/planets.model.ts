import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

import { Planet } from "../../types/planet";

const habitablePlanets: Planet[] = [];

function isHabitablePlanet(planet: Planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
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
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "kepler_data.csv")
    )
      // @ pipe parse()
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      // @ stream data line by line?
      .on("data", (data) => {
        if (isHabitablePlanet(data)) habitablePlanets.push(data);
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

function getAllPlanets() {
  return habitablePlanets;
}

export { loadPlanetsData, getAllPlanets };
// export { loadPlanetsData, habitablePlanets as planets };
