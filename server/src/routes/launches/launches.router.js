"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const launches_controller_1 = require("./launches.controller");
const launchRouter = express_1.default.Router();
launchRouter.get("/", launches_controller_1.httpGetAllLaunches);
launchRouter.post("/", launches_controller_1.httpAddNewLaunch);
exports.default = launchRouter;
