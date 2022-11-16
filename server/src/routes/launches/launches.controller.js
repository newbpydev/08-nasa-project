"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpGetAllLaunches = void 0;
const launches_model_1 = require("../../models/launches.model");
function httpGetAllLaunches(req, res) {
    return res.status(200).json((0, launches_model_1.getAllLaunches)());
}
exports.httpGetAllLaunches = httpGetAllLaunches;
