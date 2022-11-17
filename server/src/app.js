"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const planets_router_1 = __importDefault(require("./routes/planets/planets.router"));
const launches_router_1 = __importDefault(require("./routes/launches/launches.router"));
const app = (0, express_1.default)();
const corsOrigin = "http://localhost:3000";
// *                                                               [MIDDLEWARES]
// @ [SECURITY]                                              cors()
app.use((0, cors_1.default)({
    // # allow cors from this location
    origin: corsOrigin,
}));
// @                                                         logger
app.use((0, morgan_1.default)("combined"));
// @                          parse incoming json from body request
app.use(express_1.default.json());
// @                                         serve the static files
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
// @                                                        routers
app.use("/planets", planets_router_1.default);
app.use("/launches", launches_router_1.default);
// @                                                     / homepage
app.get("/*", (req, res) => {
    // # '/*' will match all routes not mentioned before
    // # if not found in the server, the client will route it, react in this ex.
    res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
exports.default = app;
