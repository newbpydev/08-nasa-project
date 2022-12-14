import { Request, Response } from "express";

import { getAllPlanets } from "../../models/planets.model";

function httpGetAllPlanets(req: Request, res: Response) {
  return res.status(200).json(getAllPlanets());
}

export { httpGetAllPlanets };
