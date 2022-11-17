import path from "path";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import planetRouter from "./routes/planets/planets.router";
import launchRouter from "./routes/launches/launches.router";

const app = express();

const corsOrigin = "http://localhost:3000";

// *                                                               [MIDDLEWARES]
// @ [SECURITY]                                              cors()
app.use(
  cors({
    // # allow cors from this location
    origin: corsOrigin,
  })
);
// @                                                         logger
app.use(morgan("combined"));

// @                          parse incoming json from body request
app.use(express.json());
// @                                         serve the static files
app.use(express.static(path.join(__dirname, "..", "public")));

// @                                                        routers
app.use("/planets", planetRouter);
app.use("/launches", launchRouter);

// @                                                     / homepage
app.get("/*", (req, res) => {
  // # '/*' will match all routes not mentioned before
  // # if not found in the server, the client will route it, react in this ex.
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
