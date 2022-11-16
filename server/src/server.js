"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const planets_model_1 = require("./models/planets.model");
const PORT = process.env.PORT || 8000;
const server = http_1.default.createServer(app_1.default);
async function startServer() {
    // @ loads planets data before starting the server
    await (0, planets_model_1.loadPlanetsData)();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}
startServer();
